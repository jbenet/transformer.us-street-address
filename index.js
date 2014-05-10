var transformer = require('dat-transformer');

module.exports = new transformer.Type({
  // @context and type filled in automatically.
  'id': 'us-street-address',
  'description': 'A street address in the U.S.A.',
  'schema': "string"
});
