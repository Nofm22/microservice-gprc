import { Injectable } from '@nestjs/common';
import { CreateNotificationResponse } from './notification.pb';

@Injectable()
export class NotificationService {
  constructor() {}

  async create(payload): Promise<CreateNotificationResponse> {
    console.log(payload);
    return {
      status: 200,
      error: ['No error'],
    };
  }
}
