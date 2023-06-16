import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';

@TypeGraphQL.InputType('PostCreateWithoutAuthorInput')
export class PostCreateWithoutAuthorInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  title!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  content?: string | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  published?: boolean | undefined;
}
