import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { TimeSheetCalendarOrderByRelationAggregateInput } from './TimeSheetCalendarOrderByRelationAggregateInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('TimeSheetOrderByWithRelationInput')
export class TimeSheetOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  StartDate?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  EndDate?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  TSCalendarID?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  TotalChargeableDay?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  TotalChargeableHour?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  TotalOTHour?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(
    (_type) => TimeSheetCalendarOrderByRelationAggregateInput,
    {
      nullable: true,
    },
  )
  calendar?: TimeSheetCalendarOrderByRelationAggregateInput | undefined;
}
