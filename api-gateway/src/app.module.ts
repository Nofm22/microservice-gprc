import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { GreetModule } from './greeter/greet.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.dev',
    }),
    AuthModule,
    GreetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
