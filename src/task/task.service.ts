import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schema/task.schema';

@Injectable()
export class TaskService {
    constructor(
        @InjectModel(Task.name) private taskModel: Model<TaskDocument>,
    ) {}
    
    async create(taskData: any): Promise<Task> {
        const createdTask = new this.taskModel(taskData);
        return createdTask.save();
    }
    
    async findOneById(id: string): Promise<Task> {
        const task = await this.taskModel.findById(id).exec();
        return task;
    }
    
    async findAll(): Promise<Task[]> {
        const tasks = await this.taskModel.find().exec();
        return tasks;
    }
    async deleteAll(): Promise<any> {
        return this.taskModel.deleteMany({});
    }
}
