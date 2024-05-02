import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './user/auth/auth.controller';
import { AuthService } from './user/auth/auth.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://biantuadikevin:HhIKWep1Kj4SsOjx@cluster0.lgfsgvy.mongodb.net/task_test?retryWrites=true&w=majority'),
    JwtModule.register({
      secret: 'YOUR_SECRET_KEY',
      signOptions: { expiresIn: '1d' }, // Optionnel : durée de validité du token
    }),
    UserModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
