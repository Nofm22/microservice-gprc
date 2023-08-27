import { Body, Controller, Inject, OnModuleInit, Post, Put } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { GREETER_SERVICE_NAME, GreeterClient, HelloReply, HelloRequest } from './greet.pb';

@Controller('greet')
export class AuthController implements OnModuleInit {
  private svc: GreeterClient;

  @Inject(GREETER_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService<GreeterClient>(GREETER_SERVICE_NAME);
  }

  @Post('sayHello')
  private async login(@Body() body: HelloRequest): Promise<Observable<HelloReply>> {
    return this.svc.sayHello(body);
  }
}
