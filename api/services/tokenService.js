var jwt = require('jwt-simple');
var moment = require('moment');

var secretKey = '397ed30bf0';

module.exports = {
  create: function (user) {
    var payload = {
      // subject
      sub: user.id,
      // expire
      exp: moment().add(7, 'days').unix()
    };

    return jwt.encode(payload, secretKey);
  },
  decodePayload: function (token) {
    return jwt.decode(token, secretKey);
  }
};
