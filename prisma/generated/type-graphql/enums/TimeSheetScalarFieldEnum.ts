import * as TypeGraphQL from 'type-graphql';

export enum TimeSheetScalarFieldEnum {
  id = 'id',
  StartDate = 'StartDate',
  EndDate = 'EndDate',
  TSCalendarID = 'TSCalendarID',
  TotalChargeableDay = 'TotalChargeableDay',
  TotalChargeableHour = 'TotalChargeableHour',
  TotalOTHour = 'TotalOTHour',
}
TypeGraphQL.registerEnumType(TimeSheetScalarFieldEnum, {
  name: 'TimeSheetScalarFieldEnum',
  description: undefined,
});
