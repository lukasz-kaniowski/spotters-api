var bcrypt = require('bcrypt-nodejs');

module.exports = {

  attributes: {
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string'
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }

  },

  beforeCreate: function (attributes, next) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) next(err);

      bcrypt.hash(attributes.password, salt, null, function (err, hash) {
        if (err) next(err);
        attributes.password = hash;
        next();
      })
    })
  }

};

