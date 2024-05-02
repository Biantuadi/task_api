import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Group extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  creator_id: string;

  @Prop()
  members: [any]

  @Prop()
  createdAt: any;
}

export const GroupSchemaName = 'Group';
export const GroupSchema = SchemaFactory.createForClass(Group);

export type GroupDocument = Group & Document;