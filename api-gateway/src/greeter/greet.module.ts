import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthController } from './greet.controller';
import { GREETER_SERVICE_NAME, GREET_PACKAGE_NAME } from './greet.pb';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
@Global()
@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        imports: [ConfigModule],
        name: GREETER_SERVICE_NAME,
        useFactory: async (config: ConfigService) => ({
          transport: Transport.GRPC,
          options: {
            url: config.get<string>('GREET_CLIENT_URL'),
            package: GREET_PACKAGE_NAME,
            protoPath: join(__dirname, './greet.proto'),
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [AuthController],
})
export class GreetModule {}
