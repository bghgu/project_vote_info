const express = require('express');
const router = express.Router();
const async = require('async');
const jwt = require('../module/jwt.js');
const db = require('../module/pool.js');

router.post('/', async(req, res, next) => {
    let id = req.body.id;
    const query = 'select c.*, v.voteName from CANDIDATE c join VOTE v on c.voteId = v.voteId where candidateId = ?';
    let data = await db.execute(query, id);
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
