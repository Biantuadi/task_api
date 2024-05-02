// user.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema'; // Assure-toi d'importer le modèle User approprié

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async create(userData: any): Promise<User> {
    const createdUser = new this.userModel(userData);
    return createdUser.save();
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }

  async findOneById(id: string): Promise<User> {
    // return this.userModel.findById(id).exec();
    const user = await this.userModel.findById(id).exec();
    return user;
  }

  async findAll(): Promise<User[]> {
    const users= await this.userModel.find().exec();
    return users;
  }

  async update(id: string, userData: any): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, userData, { new: true });
  }
}
