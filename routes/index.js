var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard');
});

router.get('/pending', function(req, res, next) {
  res.render('pending');
});

router.get('/receive', function(req, res, next) {
  res.render('receive');
});

router.get('/alreadyReceived', function(req, res, next) {
  res.render('alreadyReceived');
});

router.get('/allForms', function(req, res, next) {
  res.render('allForms');
});

router.get('/editForms', function(req, res, next) {
  res.render('editForms');
});

router.get('/userList', function(req, res, next) {
  res.render('userList');
});

router.get('/createUser', function(req, res, next) {
  res.render('createUser');
});

router.get('/updateAccount', function(req, res, next) {
  res.render('updateAccount');
});

router.get('/guest', function(req, res, next) {
  res.render('guest');
});

router.get('/login', function(req, res, next) {
  res.render('loginPage');
});



module.exports = router;
