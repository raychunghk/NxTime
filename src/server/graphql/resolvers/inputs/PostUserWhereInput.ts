import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { IntFilter } from '../inputs/IntFilter';
import { PostListRelationFilter } from '../inputs/PostListRelationFilter';
import { StringFilter } from '../inputs/StringFilter';
import { StringNullableFilter } from '../inputs/StringNullableFilter';

@TypeGraphQL.InputType('PostUserWhereInput', {
  description: '',
})
export class PostUserWhereInput {
  @TypeGraphQL.Field((_type) => [PostUserWhereInput], {
    nullable: true,
  })
  AND?: PostUserWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostUserWhereInput], {
    nullable: true,
  })
  OR?: PostUserWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostUserWhereInput], {
    nullable: true,
  })
  NOT?: PostUserWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => PostListRelationFilter, {
    nullable: true,
  })
  posts?: PostListRelationFilter | undefined;
}
