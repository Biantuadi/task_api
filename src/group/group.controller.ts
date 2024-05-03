import { Controller, Get, Param, Post , Body} from '@nestjs/common';
import { GroupService } from './group.service';
import { Group } from './schema/group.schema';

/**
 * Group controller
 */

@Controller('group')
export class GroupController {
    constructor(private readonly groupService: GroupService) {}

    @Get("all")
    async findAll(): Promise<Group[]> {
        return this.groupService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Group> {
        return this.groupService.findOneById(id);
    }

    @Post('create')
    async create(@Body() group: Group): Promise<Group> {
        return this.groupService.create(group);
    }


}
