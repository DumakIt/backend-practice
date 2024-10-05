import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './commons/filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // 값 검증 하기위한 설정
  app.useGlobalFilters(new HttpExceptionFilter()); // try catch를 자동으로 해주기 위한 설정
  await app.listen(3000);
}
bootstrap();
