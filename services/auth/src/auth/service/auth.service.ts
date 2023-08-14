import { HttpStatus, Injectable } from '@nestjs/common';

import { RegisterRequestDto } from '../auth.dto';

import { RegisterResponse } from '../auth.pb';

@Injectable()
export class AuthService {
  public async register({ email, password }: RegisterRequestDto): Promise<RegisterResponse> {
    console.log('helloworld');
    return { status: HttpStatus.CREATED, error: null };
  }
}
