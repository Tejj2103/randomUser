var express = require('express');
var router = express.Router();
const fetchData = require('../controller/fetchData');
const getUserData = require('../controller/getUserData');
const User = require("../schema/userschema");
const saveUserData = require('../model/userData');
const dbconnect = require("../src/dbconnect");

dbconnect.connectToServer(function (err, client) {
  if (err) {
    console.log(err);
  }
  console.log("connetion made");
})


router.get('/', function (req, res, next) {
  res.render('index', { title: 'GIBots' });
});

router.get('/api', async function (req, res, next) {
  fetchData(req, (error, { data } = {}) => {
    if (error) {
      return res.send({ error: error })
    }
    else {
      saveUserData(data);
      res.send("Successfully fetched the data and saved in Database");
    }
  })
})

router.get('/getUserData', async function (req, res, next) {
  var data = await getUserData();
  res.send({ male: data[0], female: data[1] });
})


router.get('/*', function (req, res, next) {
  res.render('error');
});



module.exports = router;
