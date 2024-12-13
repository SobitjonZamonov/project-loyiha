import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://exsobitjons:sobitjon2007_$$$@cluster0.rlhbb.mongodb.net/',
    ),
  ],
})
export class AppModule {}
