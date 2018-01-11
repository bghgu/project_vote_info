const express = require('express');
const router = express.Router();
const async = require('async');
const jwt = require('../module/jwt.js');
const db = require('../module/pool.js');

//선거권 확인
router.post('/', async (req, res, next) => {
    let id = req.body.id;
    let data = await db.execute('select * from USER where id = ?', id);
    if(data.length == 1) {
        if(data[0].check == 1) {
            res.status(200).send({
                message : "투표를 했습니다."
            });
        }else {
            res.status(200).send({
                message : "아직 투표를 하지 않았습니다. 당신의 후보에게 투표하세요."
            });
        }
    }else {
        res.status(200).send({
            message : "등록된 학생이 아닙니다."
        });
    }
});

module.exports = router;
