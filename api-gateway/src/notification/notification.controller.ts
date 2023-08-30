import { Body, Controller, Inject, OnModuleInit, Post, Put } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  CreateNotificationRequest,
  CreateNotificationResponse,
  NOTIFICATION_SERVICE_NAME,
  NotificationServiceClient,
} from './notification.pb';

@Controller('notification')
export class NotificationController implements OnModuleInit {
  private svc: NotificationServiceClient;

  @Inject(NOTIFICATION_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService<NotificationServiceClient>(NOTIFICATION_SERVICE_NAME);
  }

  @Post()
  private async login(@Body() body: CreateNotificationRequest): Promise<Observable<CreateNotificationResponse>> {
    return this.svc.createNotification(body);
  }
}
