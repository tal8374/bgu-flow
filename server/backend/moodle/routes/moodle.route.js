var express = require('express');
var router = express.Router();
const moodleControler = require('../controllers/moodle.controller');

router
    .post('/moodle-event/:eventEvent', moodleControler.eventLaunch);

module.exports = router;

