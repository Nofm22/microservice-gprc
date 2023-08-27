import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './service/auth.service';
import { PrismaService } from '../prisma.service';
import { ConfigService } from '@nestjs/config';
import * as amqp from 'amqplib';
@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    {
      provide: 'NOTIFICATION_SERVICE',
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        amqp.connect();
      },
      useValue: {},
    },
  ],
})
export class AuthModule {}
