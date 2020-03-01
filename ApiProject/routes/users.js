var express = require('express');
var router = express.Router();
const User = require('../models/user');
const Candidate = require('../models/candidate');
const Admin = require('../models/admin');


router.post('/signup/candidate', function(req, res) {
  if (!req.body.email || !req.body.password) {
    res.json({success: false, message: 'Please pass email and password.'});
  } else {
    var newUser = new User({
      email: req.body.email,
      password: req.body.password,
      role: 'candidate'
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, message: 'email already exists.'});
      }
      var candidate = new Candidate({
        fullname: req.body.name,
        email: req.body.email,
      });

      candidate.save().then(rtn=>{
        res.json({success: true, message: 'Successful created new user.'});
      }).catch(cerr=>{
          throw cerr;
      });
    });
  }
});

function signin(email, password){
  User.findOne({email: email}).then(user=>{
    if (!user) {
      return {success: false, message: 'Incorrect email or password'};
    } else {
      // check if password matches
      user.comparePassword(password, function (err, isMatch) {
        if (isMatch && !err) {
          //todo: User JWT Token
          return {success: true, message: 'Login successful'};
        } else {
          return {success: false, message: 'Incorrect email or password'};
        }
      });
    }
  })
}

router.post('/signin', function(req, res) {
  res.json(signin(req.body.email, req.body.password));
});

module.exports = router;