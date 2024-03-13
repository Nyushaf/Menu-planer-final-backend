const { Router } = require('express');
const { getWeek, saveWeek, deleteWeek, editWeek } = require('./WeekController');
const router = Router();

router.get('/', getWeek);
router.post('/saveWeek', saveWeek);
router.post('/deleteWeek', deleteWeek);
router.post('/editWeek', editWeek);


module.exports = router;