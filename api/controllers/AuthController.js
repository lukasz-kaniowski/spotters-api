/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var bcrypt = require('bcrypt-nodejs');
var tokenService = require('../services/tokenService');

module.exports = {
  login: function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    function send401() {
      return res.status(401).send({message: 'email and password required'});
    }

    if (!email || !password) {
      return send401();
    }

    User.findOneByEmail(email).then(function (user) {
      if (!user) return send401();
      bcrypt.compare(password, user.password, function (err, valid) {
        if (err) return res.status(403);
        if (!valid) {
          return send401();
        }
        return res.status(200).send({
          user: user,
          token: tokenService.create(user)
        });
      });


    })
  }
};

