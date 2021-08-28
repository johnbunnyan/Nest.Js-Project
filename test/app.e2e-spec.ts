import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication,ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';


describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    //테스트마다 어플리케이션 생성->npm run start의 앱이랑 다름
    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  //url에 대한 요청 테스팅->컨트롤러,서비스,파이프 모두 테스트

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome to my Movie API');
  });

//카테고리역할
describe("/movies",()=>{
  //세부항목명
  it('GET',()=>{
    return request(app.getHttpServer())//http://localhost:3000
    .get('/movies')
    .expect(200)
    .expect('[]')
  })

  it("POST 201", ()=>{
    return request(app.getHttpServer())
    .post('/movies')
    .send({
      title:'Test',
      year:2000,
      genres:['test']
    })
    .expect(201)
   
  })
  
  it("POST 400", ()=>{
    return request(app.getHttpServer())
    .post('/movies')
    .send({
      title:'Test',
      year:2000,
      genres:['test'],
      other:"thing"
    })
    .expect(400)
   
  })
  
  
  it("DELETE", ()=>{
  return request(app.getHttpServer())
  .delete('/movies')
  .expect(404)
  })
})

//실제로 돌린 app은 id가 number지만 테스트app은 string->테스트error 
//main.ts의 transform이 변환해주는데 테스트에서 작동x->테스트환경에서 파이프적용되지 x(직접해야)
describe("/movies/:id",()=>{
  it('GET 200',()=>{
    return request(app.getHttpServer())
    .get("/movies/1") 
    .expect(200)})

    it('GET 404',()=>{
      return request(app.getHttpServer())
      .get("/movies/999") 
      .expect(404)})

      it('PATCH 200',()=>{
        return request(app.getHttpServer())
        .patch('/movies/1')
        .send({title:'Updated Test'})
        .expect(200)
      })

  it('DELETE 200', ()=>{
    return request(app.getHttpServer())
    .delete('/movies/1')
    .expect(200)
  })
  

})



});
//보통 개발자는 테스팅 할 때 2개의 데이터베이스 가지고 있음
//하나는 테스팅용(데이터 생성삭제 빈번), 하나는 사용