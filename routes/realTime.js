const express = require('express');
const router = express.Router();
const jwt = require('../module/jwt.js');
const db = require('../module/pool.js');

//현재 시간 투표율
router.get('/', async(req, res, next) => {
    const query = 'select v.voteId, v.voteName, v.startTime, v.endTime, d.departmentName as target from VOTEINFO v join DEPARTMENT d on v.target = d.departmentId';
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

module.exports = router;
