import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdaateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
//여기서 데이터베이스를 만든다
//cli: nest g s 
//Single_responsibility:하나의 모듈,클래스 혹은 함수가 하나의 기능은 꼭 책임져야 한다
//구체적으로 무엇을 할 것인지

@Injectable()
export class MoviesService {
private movies:Movie[] =[]

getAll():Movie[]{
    return this.movies
}

getOne(id:number):Movie{                     //id앞에 + 붙이먄 string->number변환
    const movie = this.movies.find(movie => movie.id === id)
    
    if(!movie){
        throw new NotFoundException(`Movie with ID: ${id} not found.`) //nest제공
    }
    return movie
}

deleteOne(id:number){
    this.getOne(id) //필터역할, 여기서 에러가 안나면 다음줄에서 삭제
    this.movies = this.movies.filter(movie=>movie.id !== id) //원본배열은 그대로
    
}

create(movieData:CreateMovieDto){
    this.movies.push({
        id:this.movies.length + 1,
        ...movieData,
    })
    console.log(this.movies)
}

update(id:number, updateData:UpdaateMovieDto){
 const movie = this.getOne(id)
 this.deleteOne(id) 
 this.movies.push({...movie, ...updateData})
}
} 
