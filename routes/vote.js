const express = require('express');
const router = express.Router();
const jwt = require('../module/jwt.js');
const db = require('../module/pool.js');

//모든 투표 리스트
router.get('/', async(req, res, next) => {
    const query = 'select v.voteId, v.voteName, v.startTime, v.endTime, d.departmentName as target, v.target from VOTEINFO v join DEPARTMENT d on v.target = d.departmentId';
    let query2 = '';
    let query3 = '';

    let data = await db.execute(query);
    
    if(data.length == 0) {
        res.status(400).send({
            status : "FAIL",
            data : null,
            msg : "투표 리스트 조회 실패"
        });
    }else {
        for(i = 0; i < data.length; i++) {
            let value = data[i].target;
            let all = 0;
            let valued = 0;
            if(value == 1) {
                query2 = 'select count(*) as count from USER';
                query3 = 'select count(*) as count from AUTH';
                all = await db.execute(query2);
                valued = await db.execute(query3);
            }
            else if(value % 10 == 0) {
                query2 = 'select count(*) as count from USER where departmentId BETWEEN ? AND ?';
                query3 = 'select count(*) as count from AUTH where departmentId BETWEEN ? AND ?';
                all = await db.execute3(query2, value, value + 9);
                valued = await db.execute3(query3, value, value + 9);
            }
            else {
                query2 = 'select count(*) as count from USER where departmentId = ?';
                query3 = 'select count(*) as count from AUTH where departmentId = ?';
                all = await db.execute(query2, value);
                valued = await db.execute(query3, value);
            }
            data[i].allVoter = all[0].count;
            data[i].valuedVoter = valued[0].count;
            data[i].votePercent = ((valued[0].count/all[0].count)*100).toFixed(2); + "%";
        }
        res.status(200).send({
            status : "SUCCESS",
            data : data,
            msg : "모든 투표 리스트 및 투표율"
        });
    }
});

//투표 세부 정보
router.post('/', async(req, res, next) => {
    let id = req.body.id;
    //const query1 = 'select v.voteId, v.voteName, v.startTime, v.endTime, d.departmentName as target, (select count(*) from USER where floor(departmentId/10)*10 = floor(d.departmentId/10)*10) as allVoteCount from VOTE v join DEPARTMENT d on v.target = d.departmentId where v.voteId = ?';
    const query2 = 'select * from CANDIDATE where voteId = ?'
    let list = await db.execute(query2, id);
    if(list.length != 0) {
        res.status(200).send({
            message : "SUCCESS",
            data : list
        });
    }else {
        res.status(200).send({
            message : "FAIL"
        });
    }
});

module.exports = router;
