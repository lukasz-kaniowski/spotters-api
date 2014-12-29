var tokenService = require('../services/tokenService');


module.exports = function (req, res, next) {
  if (!req.headers || !req.headers.authorization) {
    return res.status(401).send({
      message: 'Authentication failed'
    })
  }

  var token = req.headers.authorization.split(' ')[1];
  var payload = tokenService.decodePayload(token);

  if (!payload.sub) {
    return res.status(401).send({
      message: 'You are not authorized'
    })
  }
  next();

};
