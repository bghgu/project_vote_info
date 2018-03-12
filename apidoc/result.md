# 선거 결과 확인(`/result`)
---
## 선거 결과 확인

메소드 | 경로 | 짧은 설명
--- | --- | ---
GET | / | 모든 선거 결과 목록

### 응답 바디
#### 선거 결과 리스트 반환 성공
```json
{
    "message": [
        {
            "voteId": 1,
            "voteName": "총학생회선거",
            "data": [
                {
                    "candidateId": 2,
                    "count(*)": 2,
                    "campName": "프리런 반대",
                    "leaderName": "",
                    "leaderDeptName": "",
                    "subLeaderName": "",
                    "subLeaderDeptName": "",
                    "photo": "",
                    "message": "당선"
                },
                {
                    "candidateId": 1,
                    "count(*)": 1,
                    "campName": "프리런",
                    "leaderName": "조민국",
                    "leaderDeptName": "소프",
                    "subLeaderName": "강철진",
                    "subLeaderDeptName": "소프",
                    "photo": "https://s3.ap-northeast-2.amazonaws.com/project-vote/%ED%94%BC%EC%B9%B4%EC%B8%84.jpg"
                },
                {
                    "candidateId": 4,
                    "count(*)": 1,
                    "campName": "늘솜",
                    "leaderName": "배다슬",
                    "leaderDeptName": "소프",
                    "subLeaderName": "김미소",
                    "subLeaderDeptName": "소프",
                    "photo": "https://s3.ap-northeast-2.amazonaws.com/project-vote/%ED%94%BC%EC%B9%B4%EC%B8%84.jpg"
                }
            ]
        },
        {
            "voteId": 2,
            "voteName": "IT학부선거",
            "data": [
                {
                    "candidateId": 3,
                    "count(*)": 3,
                    "campName": "프리런 기권",
                    "leaderName": "",
                    "leaderDeptName": "",
                    "subLeaderName": "",
                    "subLeaderDeptName": "",
                    "photo": null,
                    "message": "당선"
                },
                {
                    "candidateId": 4,
                    "count(*)": 1,
                    "campName": "늘솜",
                    "leaderName": "배다슬",
                    "leaderDeptName": "소프",
                    "subLeaderName": "김미소",
                    "subLeaderDeptName": "소프",
                    "photo": "https://s3.ap-northeast-2.amazonaws.com/project-vote/%ED%94%BC%EC%B9%B4%EC%B8%84.jpg"
                }
            ]
        },
        {
            "voteId": 3,
            "voteName": "소프트웨어공학전공선거",
            "data": [
                {
                    "candidateId": 7,
                    "count(*)": 4,
                    "campName": "새침",
                    "leaderName": "한지혜",
                    "leaderDeptName": "소프",
                    "subLeaderName": "정혜민",
                    "subLeaderDeptName": "소프",
                    "photo": "https://s3.ap-northeast-2.amazonaws.com/project-vote/%ED%94%BC%EC%B9%B4%EC%B8%84.jpg",
                    "message": "당선"
                }
            ]
        }
    ]
}
```
---
