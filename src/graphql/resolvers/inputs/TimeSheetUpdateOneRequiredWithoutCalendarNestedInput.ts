import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { TimeSheetCreateOrConnectWithoutCalendarInput } from './TimeSheetCreateOrConnectWithoutCalendarInput';
import { TimeSheetCreateWithoutCalendarInput } from './TimeSheetCreateWithoutCalendarInput';
import { TimeSheetUpdateWithoutCalendarInput } from './TimeSheetUpdateWithoutCalendarInput';
import { TimeSheetUpsertWithoutCalendarInput } from './TimeSheetUpsertWithoutCalendarInput';
import { TimeSheetWhereUniqueInput } from './TimeSheetWhereUniqueInput';

@TypeGraphQL.InputType('TimeSheetUpdateOneRequiredWithoutCalendarNestedInput')
export class TimeSheetUpdateOneRequiredWithoutCalendarNestedInput {
  @TypeGraphQL.Field((_type) => TimeSheetCreateWithoutCalendarInput, {
    nullable: true,
  })
  create?: TimeSheetCreateWithoutCalendarInput | undefined;

  @TypeGraphQL.Field((_type) => TimeSheetCreateOrConnectWithoutCalendarInput, {
    nullable: true,
  })
  connectOrCreate?: TimeSheetCreateOrConnectWithoutCalendarInput | undefined;

  @TypeGraphQL.Field((_type) => TimeSheetUpsertWithoutCalendarInput, {
    nullable: true,
  })
  upsert?: TimeSheetUpsertWithoutCalendarInput | undefined;

  @TypeGraphQL.Field((_type) => TimeSheetWhereUniqueInput, {
    nullable: true,
  })
  connect?: TimeSheetWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TimeSheetUpdateWithoutCalendarInput, {
    nullable: true,
  })
  update?: TimeSheetUpdateWithoutCalendarInput | undefined;
}
