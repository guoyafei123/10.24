var express = require('express');
var router = express.Router();
var fs = require('fs');
var n = 0;
var m = 0;
/* GET home page. */
router.get('/', function(req, res, next) {
    n++;
    fs.writeFile('public/gyf2.txt', '访问次数' + n, function(err) {
        fs.readFile('public/gyf2.txt', 'utf-8', function(err, data) {
            res.render('index', {
                ad: data
            })
        })
    })
});
router.get('/efv', function(req, res, next) {
    m++;
    fs.writeFile('public/gyf3.txt', '访问次数' + m, function(err) {
        fs.readFile('public/gyf3.txt', 'utf-8', function(err, data) {
            res.render('gyf', {
                a: data
            })
        })
    })
})
module.exports = router;