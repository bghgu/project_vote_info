# 선거 정보 확인(`/vote`)
---
## 모든 투표 목록

메소드 | 경로 | 짧은 설명
--- | --- | ---
GET | / | 모든 투표 목록

### 응답 바디
#### 투표 리스트 반환 성공
```json
{
    "message": "SUCCESS",
    "data": [
        {
            "voteId": 1,
            "voteName": "총학생회장 투표",
            "startTime": "2017-12-31T15:00:00.000Z",
            "endTime": "2018-01-30T15:00:00.000Z",
            "target": "전체"
        },
        {
            "voteId": 2,
            "voteName": "IT학부회장 투표",
            "startTime": "2017-12-31T15:00:00.000Z",
            "endTime": "2018-01-30T15:00:00.000Z",
            "target": "IT융합자율학부"
        },
        {
            "voteId": 3,
            "voteName": "소프트웨어공학전공대표 투표",
            "startTime": "2017-12-31T15:00:00.000Z",
            "endTime": "2018-01-30T15:00:00.000Z",
            "target": "IT융합자율학부 소프트웨어공학전공"
        }
    ]
}
```
#### 투표 리스트 반환 실패
```json
{
    "message": "FAIL"
}
```
---
## 투표 세부 정보

메소드 | 경로 | 짧은 설명
--- | --- | ---
POST | / | 투표 세부 정보 및 후보자 리스트

### 요청 헤더
~~~
Content-Type: application/json
~~~

### 요청 바디
#### 설명
```json
{
    "id": "투표 리스트의 voteId값"
}
```
#### 예
```json
{
    "id": "3"
}
```
### 응답 바디
#### 투표 세부 정보
```json
{
    "message": "SUCCESS",
    "data": [
        {
            "candidateId": 5,
            "name": "학생5",
            "departmentName": "소프트웨어공학과",
            "position": "전공대표",
            "campName": null,
            "photo": null,
            "voteCount": null,
            "voteId": 3
        },
        {
            "candidateId": 6,
            "name": "학생6",
            "departmentName": "소프트웨어공학과",
            "position": "전공대표",
            "campName": null,
            "photo": null,
            "voteCount": null,
            "voteId": 3
        }
    ]
}
 ```
#### 투표 세부 정보 없음
 ```json
 {
     "message": "FAIL"
 }
  ```
---
