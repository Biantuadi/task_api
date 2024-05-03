import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema({ timestamps: true })
export class Task extends Document {
  @Prop()
  title: string;

  @Prop()
  dueDate: string;

  @Prop()
  description: string;

  @Prop()
  status: string;

  @Prop()
  priority: string;

  @Prop()
  creator_id: string;

  @Prop()
  assignee_id: string;

  @Prop({ default: Date.now })
  createdAt: Date;
    id: any;
}

export const TaskSchema = SchemaFactory.createForClass(Task);

