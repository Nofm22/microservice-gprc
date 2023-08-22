import { HttpStatus, Injectable } from '@nestjs/common';

import { RegisterRequestDto } from '../auth.dto';

import { LoginResponse, RegisterResponse } from '../auth.pb';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}
  public async register({ email, password }: RegisterRequestDto): Promise<RegisterResponse> {
    const user = await this.prismaService.users.create({
      data: {
        email,
        password,
      },
    });
    console.log(user);
    return { status: HttpStatus.CREATED, error: null };
  }

  public async login(payload): Promise<string> {
    console.log(payload);
    // return { status: HttpStatus.OK, error: null, token: 'ptnminh' };
    return 'ptnminh';
  }
}
