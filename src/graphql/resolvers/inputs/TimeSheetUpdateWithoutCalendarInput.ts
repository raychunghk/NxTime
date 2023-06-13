import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFieldUpdateOperationsInput } from './DateTimeFieldUpdateOperationsInput';
import { DecimalFieldUpdateOperationsInput } from './DecimalFieldUpdateOperationsInput';
import { IntFieldUpdateOperationsInput } from './IntFieldUpdateOperationsInput';

@TypeGraphQL.InputType('TimeSheetUpdateWithoutCalendarInput')
export class TimeSheetUpdateWithoutCalendarInput {
  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  StartDate?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  EndDate?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  TSCalendarID?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DecimalFieldUpdateOperationsInput, {
    nullable: true,
  })
  TotalChargeableDay?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DecimalFieldUpdateOperationsInput, {
    nullable: true,
  })
  TotalChargeableHour?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DecimalFieldUpdateOperationsInput, {
    nullable: true,
  })
  TotalOTHour?: DecimalFieldUpdateOperationsInput | undefined;
}
