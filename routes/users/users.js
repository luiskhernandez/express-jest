var express = require('express');
var router = express.Router();

var index = function(req, res, next) {
  res.send('respond with a resource');
}
/* GET users listing. */

router.get('/', index);
module.exports = {
  router,
  index
}
