import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { RegisterRequestDto } from './auth.dto';
import { AUTH_SERVICE_NAME, LoginResponse, RegisterResponse } from './auth.pb';
import { AuthService } from './service/auth.service';

@Controller()
export class AuthController {
  @Inject(AuthService)
  private readonly service: AuthService;

  @GrpcMethod(AUTH_SERVICE_NAME, 'Register')
  private register(payload: RegisterRequestDto): Promise<RegisterResponse> {
    return this.service.register(payload);
  }

  @GrpcMethod(AUTH_SERVICE_NAME, 'Login')
  private login(payload): Promise<string> {
    return this.service.login(payload);
  }
}
