var express = require('express');
var router = express.Router();


/* Models Import. */
var Department = require('../Models/Department');
var Student = require('../Models/Student');
var Faculty = require('../Models/Faculty');
var Course = require('../Models/Course');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});
/* Add Department */
router.post('Add-Depart',function(req,res,next)
{
   const dept = new Department(req.body);
   dept.save(err=>{
    if (err) return res.json("Error");
    return res.json("Sucess");
   });
   
   
});
/* Mongooes */
const mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected");
});







module.exports = router;
