import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../scalars';
import { LeaveRequest } from '../models/LeaveRequest';
import { StaffFiles } from '../models/StaffFiles';
import { User } from '../models/User';
import { StaffCount } from '../resolvers/outputs/StaffCount';

@TypeGraphQL.ObjectType('Staff', {
  description: '',
})
export class Staff {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  StaffName!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  AgentName!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  StaffCategory!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  Department!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  PostUnit!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  ManagerName!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  ManagerTitle!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  ManagerEmail!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  leaveRequests?: LeaveRequest[];

  user?: User;

  staffFiles?: StaffFiles[];

  @TypeGraphQL.Field((_type) => StaffCount, {
    nullable: true,
  })
  _count?: StaffCount | null;
}
