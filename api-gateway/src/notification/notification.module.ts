import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { NOTIFICATION_PACKAGE_NAME, NOTIFICATION_SERVICE_NAME } from './notification.pb';
import { NotificationController } from './notification.controller';
@Global()
@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        imports: [ConfigModule],
        name: NOTIFICATION_SERVICE_NAME,
        useFactory: async (config: ConfigService) => ({
          transport: Transport.GRPC,
          options: {
            url: config.get<string>('NOTI_CLIENT_URL'),
            package: NOTIFICATION_PACKAGE_NAME,
            protoPath: join(__dirname, './notification.proto'),
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [NotificationController],
})
export class NotificationModule {}
