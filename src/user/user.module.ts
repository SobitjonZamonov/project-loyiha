import { Module } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ],
    controllers: [],
    providers: [
      {
        provide: 'userRepo',
        useClass: UserRepository,
      },
      {
        provide: 'userSecret',
        useValue: 'qwer12345',
      },
      {
        provide: 'randomString',
        useFactory: () => {
          return Math.random();
        },
      },
      UserRepository,
    ],
    exports: [UserRepository],
  })