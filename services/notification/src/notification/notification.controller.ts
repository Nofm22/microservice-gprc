import { Controller } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CreateNotificationResponse,
  NOTIFICATION_SERVICE_NAME,
} from './notification.pb';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @GrpcMethod(NOTIFICATION_SERVICE_NAME, 'CreateNotification')
  createNotification(payload): Promise<CreateNotificationResponse> {
    return this.notificationService.create(payload);
  }
}
