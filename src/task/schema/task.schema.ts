import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
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

  @Prop()
  createdAt: any;
}

export const TaskSchemaName = 'Task';
export const TaskSchema = SchemaFactory.createForClass(Task);

export type TaskDocument = Task & Document;
