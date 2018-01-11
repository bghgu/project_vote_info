// 각종 라우팅을 연결하는 코드
const express = require('express');
const router = express.Router();

//실시간 투표율 확인
router.use('/real-time', require('./realTime'));

//선거 정보 확인
router.use('/vote', require('./vote'));

//후보자 정보 확인
router.use('/candidate', require('./candidate'));

//선거권 확인
router.use('/suffrage', require('./suffrage'));

//선거 여부 확인
router.use('/check', require('./check'));

//투표 결과 확인
router.use('/result', require('./result'));

module.exports = router;
