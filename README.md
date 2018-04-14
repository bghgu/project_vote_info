# project_vote_info

**당신의 회장에게 투표하세요**

블록체인을 이용한 전자 투표 시스템 

* 마이크로 서비스 아키텍쳐, 3개의 서비스 서버로 구성

선거 및 선관위 관리 시스템 / 투표 시스템 / **선거 정보 조회 시스템**

프로젝트 기간 : 2018년 겨울 방학

맡은 역할 : PM, DB 설계, 투표 정보 조회 시스템 개발, 투표 시스템 개발

[투표 시스템 작품제안서](https://github.com/bghgu/project_vote_info/blob/master/%ED%88%AC%ED%91%9C%20%EC%8B%9C%EC%8A%A4%ED%85%9C_%EC%9E%91%ED%92%88%EC%A0%9C%EC%95%88%EC%84%9C.pdf) - 작품 제안서

사용 기술 : Node.js, Express.js, MyBatis, AWS

API : https://github.com/bghgu/project_vote_info/wiki

![db.png](https://github.com/bghgu/project_vote_info/blob/master/image/db.png)

ERD 다이어그램

## 구성

![1.png](https://github.com/bghgu/project_vote_info/blob/master/image/1.png)

* 전체 시스템 구성도

![2.png](https://github.com/bghgu/project_vote_info/blob/master/image/2.png)

* 선거 정보 조회 시스템 구성도
* 기능
  * 선거 정보 조회 - 선거 이름, 투표 대상(학과), 투표 시간, 후보자 정보
  * 실시간 투표율 확인
  * 나의 선거권 조회
  * 나의 선거 완료 여부 확인(블록 체인 검사)
  * 투표 결과

## 시작하기

모든 소스코드는 Atom + Windows10 + Node.js 8 환경에서 작성되었습니다.

- Node.js의 Async/Await 도구를 사용해 (Promise) 비동기 제어를 하고 있습니다.
- Node.js의 버전을 7.6 이상으로 유지해햐 합니다.

### 설치하기

- `nodejs` 와 `npm` 을 설치합니다. 설치 방법은 [nodejs.org](https://nodejs.org) 를 참고하세요.
- Node.js 8 LTS 버전을 설치합니다.
- 실행에 필요한 의존성을 설치합니다.

```
  npm install
```

### 실행하기

```
  npm start
```

- `localhost:3000`으로 접속이 가능합니다

### AWS EC2 실행 하기

- `nodejs` 와 `npm` 을 설치합니다. 설치 방법은 [nodejs.org](https://nodejs.org) 를 참고하세요.
- Node.js 8 LTS 버전을 설치합니다.


- 실행에 필요한 의존성을 설치합니다.

```
  npm install
```

### 실행하기

- Express 앱용 프로세스 관리자 `pm2 `를 이용해 배포 합니다.

```
  npm install pm2 -g
```

- Express 앱용 프로세스 관리자 `pm2 `를 이용해 배포 합니다.

```
  pm2 start ./bin/www --name "앱 이름"
```

- 현재 실행중인 프로세스 목록을 확인 합니다.

```
  pm2 list
```

- 프로세스를 중지 합니다.

```
  pm2 delete --name "앱 이릅"
```

- 프로세스를 모니터 합니다.

```
  pm2 moni t --name "앱 이름"
```

- `ec2_ip:3000`으로 접속이 가능합니다

## 배포

* AWS EC2 - 애플리케이션 서버
* AWS RDS - db 서버

## 사용된 도구

* [Node.js](https://nodejs.org/ko/) - Chrome V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임
* [Express.js](http://expressjs.com/ko/) - Node.js 웹 애플리케이션 프레임워크
* [NPM](https://rometools.github.io/rome/) - 자바 스크립트 패키지 관리자
* [PM2](http://pm2.keymetrics.io/) - Node 프로세스 관리 도구
* [VS Code](https://code.visualstudio.com/) - 편집기
* [Mysql](https://www.mysql.com/) - DataBase
* [AWS EC2](https://aws.amazon.com/ko/ec2/?sc_channel=PS&sc_campaign=acquisition_KR&sc_publisher=google&sc_medium=english_ec2_b&sc_content=ec2_e&sc_detail=aws%20ec2&sc_category=ec2&sc_segment=177228231544&sc_matchtype=e&sc_country=KR&s_kwcid=AL!4422!3!177228231544!e!!g!!aws%20ec2&ef_id=WkRozwAAAnO-lPWy:20180412120123:s) - 클라우드 환경 컴퓨팅 시스템
* [AWS RDS](https://aws.amazon.com/ko/rds/) - 클라우드 환경 데이터베이스 관리 시스템

## 저자

* **배다슬** - *초기작* - [bghgu](https://github.com/bghgu)


[기여자 목록](https://github.com/bghgu/project_vote_info/graphs/contributors)을 확인하여 이 프로젝트에 참가하신 분들을 보실 수 있습니다.

## 감사 인사

* [블록체인 한번에 이해하기](https://homoefficio.github.io/2017/11/19/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8-%ED%95%9C-%EB%B2%88%EC%97%90-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0/)
* [Java 코드로 이해하는 블록체인](http://www.popit.kr/java-%EC%BD%94%EB%93%9C%EB%A1%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EB%8A%94-%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8blockchain/)

## 수상

- 2018년 제 10회 소프트웨어공학과 경진대회 자유주제 부분 1위

------