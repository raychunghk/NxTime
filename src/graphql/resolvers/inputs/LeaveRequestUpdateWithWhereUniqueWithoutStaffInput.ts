import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LeaveRequestUpdateWithoutStaffInput } from './LeaveRequestUpdateWithoutStaffInput';
import { LeaveRequestWhereUniqueInput } from './LeaveRequestWhereUniqueInput';

@TypeGraphQL.InputType('LeaveRequestUpdateWithWhereUniqueWithoutStaffInput')
export class LeaveRequestUpdateWithWhereUniqueWithoutStaffInput {
  @TypeGraphQL.Field((_type) => LeaveRequestWhereUniqueInput, {
    nullable: false,
  })
  where!: LeaveRequestWhereUniqueInput;

  @TypeGraphQL.Field((_type) => LeaveRequestUpdateWithoutStaffInput, {
    nullable: false,
  })
  data!: LeaveRequestUpdateWithoutStaffInput;
}
