require('./specHelper');

var request = require('supertest');

describe('AuthController', function () {

  describe('/login', function () {
    before(function (done) {
      User.create({email: 'test@test.com', password: 'SuperSecretPassword123'}).exec(done);
    });


    it('should return 200 with body: { user, token } for user with correct password', function (done) {
      request(sails.hooks.http.app)
        .post('/login')
        .send({email: 'test@test.com', password: 'SuperSecretPassword123'})
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);

          expect(res.body).to.have.property('token')
            .that.is.a('string');
          expect(res.body).to.have.property('user')
            .that.is.an('object');

          expect(res.body).to.not.have.deep.property('user.password');
          done();

        });

    });

    [
      {name: 'with incorect email', user: {email: 'test@not.existing.com', password: 'SuperSecretPassword123'}},
      {name: 'with incorect password', user: {email: 'test@test.com', password: 'incorect'}}

    ].forEach(function (s) {
        it('should return 401 for user ' + s.name, function (done) {
          request(sails.hooks.http.app)
            .post('/login')
            .send(s.user)
            .expect(401)
            .end(done);
        });
      });

  });

});
