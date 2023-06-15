import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { PostUserWhereUniqueInput } from '../../../inputs/PostUserWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class FindUniquePostUserArgs {
  @TypeGraphQL.Field((_type) => PostUserWhereUniqueInput, {
    nullable: false,
  })
  where!: PostUserWhereUniqueInput;
}
