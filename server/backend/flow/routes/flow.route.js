var express = require('express');
var router = express.Router();
const flowController = require('../controllers/flow.controller');

/* GET users listing. */
// for example http://localhost:3000/api/flow/list
router.get('/list', flowController.list);

module.exports = router;
