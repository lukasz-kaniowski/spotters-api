var Sails = require('sails'),
  sails;

var chai = require('chai');

expect = chai.expect;

before(function(done) {
  Sails.lift({
    models: {
      //connection: 'test',
      migrate: 'drop'
    }
  }, function(err, server) {
    sails = server;
    if (err) return done(err);
    // here you can load fixtures, etc.
    done(err, sails);
  });
});

after(function(done) {
  // here you can clear fixtures, etc.
  sails.lower(done);
});
