import { Catch, Injectable } from '@nestjs/common';
//import * as fs from 'fs';
import * as XLSX from 'xlsx';
import * as ExcelJS from 'exceljs';
import { spawn } from 'child_process';
import { PrismaService } from '../../prisma/prisma.service';
import { Staff, Prisma } from '@prisma/client';
import {format} from 'date-fns'
import * as fs from 'fs-extra';
import * as path from 'path';
import * as libre from 'libreoffice-convert';//import * as XlsxPopulate from 'xlsx-populate';
import * as unoconv from 'node-unoconv';
@Injectable()
export class TimesheetService {
    private readonly xlsfilename = 'T26TimeSheet.xlsx'; constructor(private prisma: PrismaService) { } getContent() {
        const filePath = this.getFilePath(this.xlsfilename);
        const fileContent = fs.readFileSync(filePath);
        const workbook = XLSX.read(fileContent);
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        return XLSX.utils.sheet_to_json(sheet);
    }
    getFilePath(filename: string) {
        return `${__dirname}/../../../../timesheet/${filename}`;
    }
    async writeStaffInfoJsonToExcel(jsonObj: any, fieldmap: Record<string, string>, destPath: string) {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(destPath);
        const worksheet = workbook.getWorksheet(1);        // Write the values to the worksheet
        for (const field of Object.keys(fieldmap)) {
            const cell = worksheet.getCell(fieldmap[field]);
            cell.value = jsonObj[field];
        }        // Save the workbook to the destination path
        await workbook.xlsx.writeFile(destPath); console.log('Data written to Excel file successfully!');
        return destPath;
    }


    formatDate(date: Date): string {
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        return `${yyyy}${mm}${dd}`;
    }
    async copyAndRenameFile(srcFileName: string, destFileName: string): Promise<void> {
        await fs.copy(srcFileName, destFileName);
    }
    writeCellValue(worksheet, cellId, value) {
        const cell = worksheet.getCell(cellId);
        cell.value = value;
    }
    async makeTimeSheet(year: number, month: number): Promise<string> {
        const formattedDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');
        const sourcePath = this.getFilePath(this.xlsfilename);
        const destPath = this.getFilePath(`T26TimeSheet_${formattedDate}.xlsx`);
        const destPDF = this.getFilePath(`T26TimeSheet_${formattedDate}.pdf`);

        console.log(destPath);
        if (fs.existsSync(destPath)) {
            console.log('Destination file already exists!');
            fs.unlinkSync(destPath);
        }

        try {
            // Copy the file
            console.log(`source path, ${sourcePath}`)
            console.log(`dest source path, ${destPath}`)
            const data = await fs.promises.readFile(sourcePath);
            await fs.promises.writeFile(destPath, data);
            console.log('File copied successfully!');

            // Load the workbook
            const stf = await this.prisma.staff.findUnique({ where: { id: 4 } });
            console.log(stf);
            const fieldmap = {
                StaffName: 'D5',
                AgentName: 'D6',
                StaffCategory: 'D7',
                Department: 'D8',
                PostUnit: 'L8',
                ManagerName: 'K12',
                ManagerTitle: 'E13',
                ManagerEmail: 'K13',
            };
            await this.writeStaffInfoJsonToExcel(stf, fieldmap, destPath);

            const objCalendar = await this.prisma.calendarMaster.findMany({
                where: {
                    Year: year,
                    Month: month,
                },
                orderBy: [
                    {
                        CalendarDate: 'asc',
                    }
                ],
            });
            let firstdatecell = 20;
            const workbook = new ExcelJS.Workbook();
            await workbook.xlsx.readFile(destPath);
            const worksheet = workbook.getWorksheet(1);
            let datecellpos = firstdatecell;
            let cellid = "";
            const emptydateRowID = ['A', 'C', 'E', 'H', 'J', 'L', 'N'];
            const celltimesheetstart = "D9";
            const celltimesheetend = "L9";
            
            this.writeCellValue(worksheet,celltimesheetstart,  format(objCalendar[0].CalendarDate, 'dd-MMM-yyyy'))
            this.writeCellValue(worksheet,celltimesheetend,  format(objCalendar.pop().CalendarDate, 'dd-MMM-yyyy'))

            for (let i = 0; i < 31; i++) {
                cellid = "C" + datecellpos;
                const cell = worksheet.getCell(cellid);

                if (datecellpos - firstdatecell < objCalendar.length) {
                    let dt = objCalendar[i];
                    cell.value = dt.WeekDayName.toUpperCase().startsWith('S') ? "0.0" : "1.0";
                } else {
                    emptydateRowID.forEach(x => {
                        let _hcellid = x + datecellpos;
                        console.log(`last row post ${_hcellid}`)
                        const _cell = worksheet.getCell(_hcellid);
                        _cell.value = "";
                    });
                }

                datecellpos++;
            }

            await workbook.xlsx.writeFile(destPath);
            await this.convertToPdf(destPath, destPDF);
            console.log('calendar written to cell successfully!');
            return destPath;
        } catch (err) {
            console.error('Error copying file:', err);
            return '';
        }
    }

    async convertToPdf(inputFile, outputFile): Promise<void> {
        const child = spawn('unoconv', ['-f', 'pdf', '-o', outputFile, inputFile]); child.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        }); child.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        }); await new Promise<void>((resolve, reject) => {
            child.on('close', (code) => {
                if (code === 0) {
                    resolve();
                } else {
                    reject(new Error(`unoconv exited with code ${code}`));
                }
            });
        });
    } async getCalendaryMonthByYearMonth(month, year) {
        const currentcalendar = await this.prisma.calendarMaster.findMany({
            where: {
                Year: 2023
                , Month: month
            }
        }); return currentcalendar;
    }
    async getCurrentMonthCalendar(tsmonth) {
        const dt = new Date();
        console.log(dt.getFullYear())
        console.log(dt.getMonth() + 1);
        const currentYear = dt.getFullYear();
        const objCalendar = await this.prisma.calendarMaster.findMany({
            where: {
                Year: 2023
                , Month: tsmonth
            }
        });
        console.log('calendar returning?')
        console.log(objCalendar);
        return objCalendar;
    }
}