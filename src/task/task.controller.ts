import { Controller, Get, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './schema/task.schema';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get("all")
    async findAll(): Promise<Task[]> {
        return this.taskService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Task> {
        return this.taskService.findOneById(id);
    }
}
