import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './service/auth.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
})
export class AuthModule {}
