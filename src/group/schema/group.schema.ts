import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GroupDocument = Group & Document;


@Schema({ timestamps: true })
export class Group extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  creator_id: string;

  @Prop()
  members: [any]

  @Prop({ default: Date.now })
  createdAt: Date;
    id: any;
}

export const GroupSchemaName = 'Group';
export const GroupSchema = SchemaFactory.createForClass(Group);
