const express = require('express');
const router = express.Router();
const async = require('async');
const jwt = require('../module/jwt.js');
const db = require('../module/pool.js');

//선거권 확인
router.post('/', async (req, res, next) => {
    let id = req.body.id;
    const query = 'select * from USER where id = ?';
    let data = await db.execute(query, id);
    if(data.length == 1) {
        if(data[0].userType == 1) {
            res.status(200).send({
                message : "선거권이 있습니다."
            });
        }else {
            res.status(200).send({
                message : "선거권이 없습니다."
            });
        }
    }else {
        res.status(200).send({
            message : "등록된 학생이 아닙니다."
        });
    }
});

module.exports = router;
