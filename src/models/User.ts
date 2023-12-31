import { Post } from './Post';
import { Account } from './Account';
import { Session } from './Session';
import { Staff } from './Staff';
import { Field, ObjectType, ID, Int } from 'type-graphql';

@ObjectType()
export class User {
  @Field((_type) => ID)
  id: string;

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  emailVerified?: Date;

  @Field({ nullable: true })
  image?: string;

  @Field()
  password: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field((_type) => [Account])
  accounts: Account[];

  @Field((_type) => [Session])
  sessions: Session[];

  @Field((_type) => [Staff])
  staff: Staff[];

  @Field((_type) => Int, { nullable: true })
  staffId?: number;

  // skip overwrite 👇
}
