import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './user/auth/auth.controller';
import { AuthService } from './user/auth/auth.service';
import { TaskModule } from './task/task.module';
import { GroupModule } from './group/group.module';
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;
if (!MONGO_URL) {
  throw new Error('MONGO_URL is not set in environment variables');
}
@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URL),
    JwtModule.register({
      secret: 'YOUR_SECRET_KEY',
      signOptions: { expiresIn: '1d' }, // Optionnel : durée de validité du token
    }),
    UserModule,
    TaskModule,
    GroupModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
