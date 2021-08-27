import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
//nest g mo
//앱을 만들 때 모듈로 분리해야 좋다.

@Module({
    controllers:[MoviesController],
    //Nest.js가 MoviesService를 알아서 import하고 Controller에 inject(주입)
    providers:[MoviesService] 
})
export class MoviesModule {}
 

//Nest.js는 express위에서 돌아가기 때문에 컨트롤러에서 Request,Response객체 필요하면 사용 가능
//@Req~ @Res~ ->Express앱에 접근
//하지만 또 Fastify라는 프레임워크도 동시에 같이 사용(express보다 2배 빠름)
//그래서 req,res객체 많이 사용하면 안됨:프레임워크를 바꾸고 싶을 때 문제
//Nest.js가 express랑 fastify 전환하고 싶을 때 알아서 해줌
