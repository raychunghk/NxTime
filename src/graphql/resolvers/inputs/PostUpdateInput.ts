import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { BoolFieldUpdateOperationsInput } from './BoolFieldUpdateOperationsInput';
import { NullableStringFieldUpdateOperationsInput } from './NullableStringFieldUpdateOperationsInput';
import { StringFieldUpdateOperationsInput } from './StringFieldUpdateOperationsInput';
import { UserUpdateOneRequiredWithoutPostsNestedInput } from './UserUpdateOneRequiredWithoutPostsNestedInput';

@TypeGraphQL.InputType('PostUpdateInput')
export class PostUpdateInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  content?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => BoolFieldUpdateOperationsInput, {
    nullable: true,
  })
  published?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutPostsNestedInput, {
    nullable: true,
  })
  author?: UserUpdateOneRequiredWithoutPostsNestedInput | undefined;
}
