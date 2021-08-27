import { Module } from '@nestjs/common';

import { MoviesModule } from './movies/movies.module';
import { AppController } from './movies/app.controller';


@Module({
  imports: [MoviesModule],
  //원래 AppController랑 AppProvider만 가지고 있어야 함
  //Nest.js에서 앱은 여러 개의 모듈로 구성됨
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
//루트 모듈역할(하나의 모듈만 존재)
