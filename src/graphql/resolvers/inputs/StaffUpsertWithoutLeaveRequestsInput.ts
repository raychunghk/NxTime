import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { StaffCreateWithoutLeaveRequestsInput } from './StaffCreateWithoutLeaveRequestsInput';
import { StaffUpdateWithoutLeaveRequestsInput } from './StaffUpdateWithoutLeaveRequestsInput';

@TypeGraphQL.InputType('StaffUpsertWithoutLeaveRequestsInput')
export class StaffUpsertWithoutLeaveRequestsInput {
  @TypeGraphQL.Field((_type) => StaffUpdateWithoutLeaveRequestsInput, {
    nullable: false,
  })
  update!: StaffUpdateWithoutLeaveRequestsInput;

  @TypeGraphQL.Field((_type) => StaffCreateWithoutLeaveRequestsInput, {
    nullable: false,
  })
  create!: StaffCreateWithoutLeaveRequestsInput;
}
