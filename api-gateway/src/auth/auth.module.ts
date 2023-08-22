import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthController } from './auth.controller';
import { AUTH_SERVICE_NAME, AUTH_PACKAGE_NAME } from './auth.pb';
import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
@Global()
@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: AUTH_SERVICE_NAME,
    //     transport: Transport.GRPC,
    //     options: {
    //       url: '0.0.0.0:50051',
    //       // url: process.env.AUTH_CLIENT_URL,
    //       // url: 'dns:///auth:50051',
    //       package: AUTH_PACKAGE_NAME,
    //       protoPath: 'node_modules/grpc-nest-proto/proto/auth.proto',
    //     },
    //   },
    // ]),
    ClientsModule.registerAsync([
      {
        imports: [ConfigModule],
        name: AUTH_SERVICE_NAME,
        useFactory: async (config: ConfigService) => ({
          transport: Transport.GRPC,
          options: {
            url: config.get<string>('AUTH_CLIENT_URL'),
            package: AUTH_PACKAGE_NAME,
            protoPath: 'node_modules/gitRepo/proto/auth.proto',
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
