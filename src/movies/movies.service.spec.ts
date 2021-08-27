import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

//이 파일이 있어야 movies controller 테스트 가능
//Nest에서는 jest가 .spec.ts 파일들 찾아볼 수 있도록 설정되있음
//테스팅하고 싶은 파일명에 .spec.ts 붙이면 됨
//유닛 테스팅:모든 함수를 따로 테스트 하는 것(서비스에서 분리된 유닛을 테스트)
//ex. getAll() function 하나만 테스트
//end-to-end(e2e) 테스트:모든 시스템 테스팅
//사용자가 특정 링크 클릭하면 그 링크를 볼 수 있어야 하는 걸 테스트
//사용자가 취할만한 액션들을 처음부터 끝까지 테스트


describe('MoviesService', () => {
  let service: MoviesService;

  //테스트 전 실행
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });


  it('should be defined', () => {
    expect(service).toBeDefined();
  });

// it("should be 4", ()=>{
//   expect(2+3).toEqual(5)
// })

//이름 아무렇게나 지어도 됨
describe("getAll", ()=>{

  it("should return an array", ()=>{
   const result = service.getAll() 
    expect(result).toBeInstanceOf(Array)
  })
})

describe("getOne", ()=>{
  

//위에서 하나 만들었으니까 배열DB에 위에꺼 들어가면서 id 1도 추가되 있을 것
it("should return a movie", ()=>{
  service.create({
    title:'Test Movie',
    genres:['test'],
    year:2000
  })

  const movie = service.getOne(1)
  expect(movie).toBeDefined()
  expect(movie.id).toEqual(1)
})
it("should throw 404 error", ()=>{
  try{
service.getOne(999)
  }catch(e){
    expect(e).toBeInstanceOf(NotFoundException)
    expect(e.message).toEqual(`Movie with ID: 999 not found.`)
  }
})


})

});

//많이 테스트 할 수록 npm run test:cov 에서 커버리지가 상승함
//어느정도의 파일들 테스트하고 있는지 알려줌