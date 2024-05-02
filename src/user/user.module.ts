// user.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), // Définis le modèle utilisateur dans le contexte de Mongoose
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // Exporte le service utilisateur si nécessaire
})
export class UserModule {}
