const express  = require('express');
const passport = require('passport');
const router = express.Router({mergeParams: true});
const User  = require('../models/user');
const catchAsync  = require('../utils/catchAsync');
const ExpressError  = require('../utils/ExpressError');
const users = require('../controllers/users')

router.route('/register')
.get(users.renderRegister)
.post(catchAsync(users.register));

router.route('/login')
.get(users.renderLogin)
.post(passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
      failureMessage: true,
      keepSessionInfo: true,
    }),
    users.login
  );


router.get('/logout',  users.logout)

module.exports = router;