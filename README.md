# project_vote_info

블록체인을 이용한 전자 투표 시스템 

마이크로 서비스 아키텍쳐

3개의 서비스 서버로 구성

선거 및 선관위 관리 시스템 / 투표 시스템 / **선거 정보 조회 시스템**

프로젝트 기간 : 2018년 겨울 방학

맡은 역할 : PM, DB 설계, 투표 정보 조회 시스템 개발, 투표 시스템 개발

API : https://github.com/bghgu/project_vote_info/wiki

## 시작하기

이 지침을 따르시면 로컬 컴퓨터에서 개발과 테스트를 위한 프로젝트 사본을 실행시킬 수 있습니다. 배포하기 항목을 확인하여 실제 시스템에 프로젝트를 배포하는 방법을 알아보세요.

### 시작하기에 앞서

프로젝트를 실행시키기 위한 도구 및 프로그렘을 나열하세요. 설치 방법도 같이 적어주셔도 됩니다.

```
예시도 제공하세요
```

### 설치하기

- `nodejs` 와 `npm` 을 설치합니다. 설치 방법은 [nodejs.org](https://nodejs.org) 를 참고하세요.
- 실행에 필요한 의존성을 설치합니다.

```
  npm install
```
###실행하기

```
  npm start
```


## 배포

* AWS EC2 - 애플리케이션 서버
* AWS RDS - db 서버

## 사용된 도구

* [Node.js](https://nodejs.org/ko/) - Chrome V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임
* [Express.js](http://expressjs.com/ko/) - Node.js 웹 애플리케이션 프레임워크
* [NPM](https://rometools.github.io/rome/) - 자바 스크립트 패키지 관리자
* [VS Code](https://code.visualstudio.com/) - 편집기
* [Mysql](https://www.mysql.com/) - DataBase
* [AWS EC2](https://aws.amazon.com/ko/ec2/?sc_channel=PS&sc_campaign=acquisition_KR&sc_publisher=google&sc_medium=english_ec2_b&sc_content=ec2_e&sc_detail=aws%20ec2&sc_category=ec2&sc_segment=177228231544&sc_matchtype=e&sc_country=KR&s_kwcid=AL!4422!3!177228231544!e!!g!!aws%20ec2&ef_id=WkRozwAAAnO-lPWy:20180412120123:s) - 클라우드 환경 컴퓨팅 시스템
* [AWS RDS](https://aws.amazon.com/ko/rds/) - 클라우드 환경 데이터베이스 관리 시스템
* [PM2](http://pm2.keymetrics.io/) - Node 프로세스 관리 도구

## 저자

* **배다슬** - *초기작* - [bghgu](https://github.com/bghgu)


[기여자 목록](https://github.com/bghgu/project_vote_info/graphs/contributors)을 확인하여 이 프로젝트에 참가하신 분들을 보실 수 있습니다.

## 감사 인사

* [블록체인 한번에 이해하기](https://homoefficio.github.io/2017/11/19/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8-%ED%95%9C-%EB%B2%88%EC%97%90-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0/)
* [Java 코드로 이해하는 블록체인](http://www.popit.kr/java-%EC%BD%94%EB%93%9C%EB%A1%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EB%8A%94-%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8blockchain/)
