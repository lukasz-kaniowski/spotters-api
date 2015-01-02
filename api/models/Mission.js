module.exports = {

  schema: true,

  attributes: {
    title: {type: 'string', required: true},
    description: {type: 'string', required: true},
    price: {type: 'string', required: true},
    duration: {type: 'integer', required: true},
    dueDate: {type: 'datetime', required: true}
  }
};

