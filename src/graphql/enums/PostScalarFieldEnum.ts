import * as TypeGraphQL from 'type-graphql';

export enum PostScalarFieldEnum {
  id = 'id',
  title = 'title',
  content = 'content',
  published = 'published',
  authorId = 'authorId',
}
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
  name: 'PostScalarFieldEnum',
  description: undefined,
});
