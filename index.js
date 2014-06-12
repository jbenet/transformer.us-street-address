var Type = require('transformer-type');

module.exports = Type({
  // @context and type filled in automatically.
  'id': 'us-street-address',
  'description': 'A street address in the U.S.A.',
  'schema': "string"
});
