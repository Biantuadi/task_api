// user.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true }) // Ajoute des horodatages createdAt et updatedAt automatiquement
export class User {
  toObject() {
    throw new Error('Method not implemented.'); 
  }
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
password: string;

  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ default: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg', type: String })
  avatar: string;

  @Prop({ default: Date.now })
  createdAt: Date;
    id: any;
}

export const UserSchema = SchemaFactory.createForClass(User);
