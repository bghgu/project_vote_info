const express = require('express');
const router = express.Router();
const async = require('async');
const jwt = require('../module/jwt.js');
const db = require('../module/pool.js');

//모든 투표 리스트
router.get('/', async(req, res, next) => {
    const query = 'select v.voteId, v.voteName, v.startTime, v.endTime, d.departmentName as target from VOTE v join DEPARTMENT d on v.target = d.departmentId';
    let data = await db.execute(query);
    if(data.length != 0) {
        res.status(200).send({
            message : "SUCCESS",
            data : data
        });
    }else {
        res.status(400).send({
            message : "FAIL"
        });
    }
});

//투표 세부 정보
router.post('/', async(req, res, next) => {
    let id = req.body.id;
    const query1 = 'select v.voteId, v.voteName, v.startTime, v.endTime, d.departmentName as target, (select count(*) from USER where floor(departmentId/10)*10 = floor(d.departmentId/10)*10) as allVoteCount from VOTE v join DEPARTMENT d on v.target = d.departmentId where v.voteId = ?';
    const query2 = 'select * from CANDIDATE where voteId = ?'
    let data = await db.execute(query1, id);
    let list = await db.execute(query2, id);
    if(data.length != 0) {
        res.status(200).send({
            message : "SUCCESS",
            data : data[0]
        });
    }else {
        res.status(200).send({
            message : "FAIL"
        });
    }
});

module.exports = router;
