# 후보자 정보 확인(`/candidate`)
---
## 후보자 리스트

메소드 | 경로 | 짧은 설명
--- | --- | ---
POST | / | 후보자 정보 확인

### 요청 헤더
~~~
Content-Type: application/json
~~~

### 요청 바디
#### 설명
```json
{
    "id": "후보자의 candidateId값"
}
```
#### 예
```json
{
    "id": "3"
}
```
### 응답 바디
#### 후보자 세부 정보
```json
{
    "message": "SUCCESS",
    "data": [
        {
            "candidateId": 3,
            "name": "학생3",
            "departmentName": "컴퓨터공학과",
            "position": "IT학부회장",
            "campName": null,
            "photo": null,
            "voteCount": null,
            "voteId": 2,
            "voteName": "IT학부회장 투표"
        }
    ]
}
 ```
#### 후보자 세부 정보 없음
 ```json
 {
     "message": "FAIL"
 }
  ```
---
