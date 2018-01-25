var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
    var dateTime = Date.now();
    res.json({MyNoodles: "Lets see Noodles are timstamped or not - " + dateTime});
});

module.exports = router;
