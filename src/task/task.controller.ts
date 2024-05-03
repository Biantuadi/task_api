import { Controller, Get, Param, Post , Body} from '@nestjs/common';
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

    @Post('create')
    async create(@Body() task: Task): Promise<Task> {
        return this.taskService.create(task);
    }

    @Post('update')
    async update(@Body() task: Task): Promise<Task> {
        return this.taskService.update(task);
    }

    @Post('delete')
    async delete(@Body() task: Task): Promise<any> {
        return this.taskService.delete(task._id);
    }


}
