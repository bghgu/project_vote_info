const express = require('express');
const router = express.Router();
const jwt = require('../module/jwt.js');
const db = require('../module/pool.js');

router.get('/', async(req, res, next) => {
    const query1 = 'select v.voteId, v.voteName from VOTEINFO v;';
    let voteInfo = await db.execute(query1);
    if(voteInfo.length != 0) {
        for(i = 0; i < voteInfo.length; i++) {
            query2 = 'select b.candidateId, count(*), c.campName, c.leaderName, c.leaderDeptName, c.subLeaderName, c.subLeaderDeptName, c.photo from BLOCKCHAIN b join CANDIDATE c on b.candidateId = c.candidateId where b.voteId = ? group by b.candidateId order by count(*) desc;'
            let data = await db.execute(query2, voteInfo[i].voteId);
            data[0].message = "당선";
            voteInfo[i].data = data;
        }
        res.status(200).send({
            message : voteInfo
        });
    }else {
        res.status(400).send({
            message : "no data"
        });
    }
});

router.post('/', async(req, res, next) => {
    
});

module.exports = router;
