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
    "status": "SUCCESS",
    "data": [
        {
            "voteId": 1,
            "voteName": "총학생회선거",
            "startTime": "2018-01-01T00:00:00.000Z",
            "endTime": "2018-01-31T09:00:00.000Z",
            "target": 1,
            "allVoter": 7,
            "valuedVoter": 1,
            "vetePercent": "14.29"
        },
        {
            "voteId": 2,
            "voteName": "IT학부선거",
            "startTime": "2018-01-01T00:00:00.000Z",
            "endTime": "2018-01-31T09:00:00.000Z",
            "target": 40,
            "allVoter": 5,
            "valuedVoter": 1,
            "vetePercent": "20.00"
        },
        {
            "voteId": 3,
            "voteName": "소프트웨어공학전공선거",
            "startTime": "2018-01-01T00:00:00.000Z",
            "endTime": "2018-01-31T09:00:00.000Z",
            "target": 42,
            "allVoter": 3,
            "valuedVoter": 1,
            "vetePercent": "33.33"
        }
    ],
    "msg": "모든 투표 리스트 및 투표율"
}
```
#### 투표 리스트 반환 실패
```json
{
    "status": "FAIL",
    "data": null
    "msg": "모든 투표 리스트 조회 실패"
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
