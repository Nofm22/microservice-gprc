import { Injectable } from '@nestjs/common';
import { CreateNotificationResponse } from './notification.pb';
import { InjectModel } from '@nestjs/mongoose';
import { Notification } from './schema/notification.schema';
import { Model } from 'mongoose';
@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification.name) private catModel: Model<Notification>,
  ) {}

  async create(payload): Promise<CreateNotificationResponse> {
    console.log(payload);
    const createdCat = new this.catModel({
      userId: 'ptnminh',
      message: 'Hello',
    });
    await createdCat.save();
    return {
      status: 200,
      error: ['No error'],
    };
  }
}
