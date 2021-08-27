import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
 //class-validator 라이브러리 사용가능하게 해줌
  app.useGlobalPipes(new ValidationPipe({
   whitelist:true,
   forbidNonWhitelisted:true, //->"property hacked(이상한 프로퍼티) should not exist",
  transform:true //요청된 데이터 타입 바꿔줌
  })) 
  await app.listen(3000);
}
bootstrap();

//jest:자바스크립트 쉽게 테스팅하는 npm 패키지
