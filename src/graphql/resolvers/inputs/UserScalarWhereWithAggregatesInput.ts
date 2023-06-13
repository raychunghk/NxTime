import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { IntWithAggregatesFilter } from './IntWithAggregatesFilter';
import { StringNullableWithAggregatesFilter } from './StringNullableWithAggregatesFilter';
import { StringWithAggregatesFilter } from './StringWithAggregatesFilter';

@TypeGraphQL.InputType('UserScalarWhereWithAggregatesInput')
export class UserScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [UserScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: UserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: UserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: UserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  email?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  name?: StringNullableWithAggregatesFilter | undefined;
}
