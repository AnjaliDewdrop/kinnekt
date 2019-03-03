var express = require('express');
var router = express.Router();

/* GET test */
router.get('/', function(req, res, next) {
    res.send({ message: 'HI!!!' })
});

module.exports = router;