import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class GroupService {
    constructor(
        @InjectModel('Group') private groupModel: Model<any>,
    ) {}
    
    async create(groupData: any): Promise<any> {
        const createdGroup = new this.groupModel(groupData);
        return createdGroup.save();
    }
    
    async findOneById(id: string): Promise<any> {
        const group = await this.groupModel.findById(id).exec();
        return group;
    }
    
    async findAll(): Promise<any[]> {
        const groups = await this.groupModel.find().exec();
        return groups;
    }
    
    async deleteAll(): Promise<any> {
        return this.groupModel.deleteMany({});
    }
}
