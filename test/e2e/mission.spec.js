require('./specHelper');

var request = require('supertest');

describe('MissionController', function () {

  describe('/missions', function () {
    it('should return 401 when no token passed', function (done) {
      request(sails.hooks.http.app)
        .get('/missions')
        .expect(401)
        .end(done);
    });
  });

});
