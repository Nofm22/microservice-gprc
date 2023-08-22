import { HttpStatus, Injectable } from '@nestjs/common';

import { RegisterRequestDto } from '../auth.dto';

import { RegisterResponse } from '../auth.pb';
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
}
