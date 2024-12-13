import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({
    required: true,
  })
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
