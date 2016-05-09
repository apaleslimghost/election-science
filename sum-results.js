var mergeWith = require('lodash.mergewith');
var add = require('lodash.add');

module.exports = function sumResults(resultA, resultB) {
	return mergeWith(resultA, resultB, add);
}
