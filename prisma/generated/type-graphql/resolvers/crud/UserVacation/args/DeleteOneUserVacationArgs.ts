import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserVacationWhereUniqueInput } from '../../../inputs/UserVacationWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class DeleteOneUserVacationArgs {
  @TypeGraphQL.Field((_type) => UserVacationWhereUniqueInput, {
    nullable: false,
  })
  where!: UserVacationWhereUniqueInput;
}
