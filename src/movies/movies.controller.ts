import { Controller, Delete, Get, Param, Post, Put, Patch, Body, Query } from '@nestjs/common';
import { create } from 'domain';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdaateMovieDto } from './dto/update-movie.dto';

//컨트롤러->url매핑, 리퀘스트받기, 쿼리나 바디 넘기는 역할, url과 해당 메서드를 연결해주는 역할
//nest g co 커맨드로 컨트롤러 생성 (co->controller)
//변수와 리턴값을 함께 볼 수 있어 직관적이다
//Nest는 응답이 성공했는지 아닌지 상태를 자동으로 보내줌


@Controller('movies') //url, 엔트리 포인트 만드는 부분(라우터)
export class MoviesController {

            //this->property(moviesService), type(MoviesService)
constructor(private readonly moviesService:MoviesService){}


@Get()
getAll():Movie[] {
    return this.moviesService.getAll()
}



@Get("/:id")       //요거는 달라도 됨(Param에 이름 붙여주는 단계)
getOne(@Param('id') movieId:number): Movie { 
    console.log(typeof movieId)
    return this.moviesService.getOne(movieId)
}
//무언가 필요하면 요청해야한다(파라미터나 바디)


@Post()
create(@Body() movieData: CreateMovieDto){
    
    return this.moviesService.create(movieData)
}

@Delete("/:id")     //transform파이프 작동(타입변환,원래 Param은 string타입)
remove(@Param('id') movieId:number){
    return this.moviesService.deleteOne(movieId)
}

@Patch("/:id")
patch(@Param('id') movieId:number, @Body() updateData:UpdaateMovieDto){
    return this.moviesService.update(movieId, updateData)
}
//@Put :모든 리소스 업데이트 부분은 Patch



}