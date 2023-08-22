import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  //console.log(join(__dirname, '/src/auth/auth.proto'));
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
