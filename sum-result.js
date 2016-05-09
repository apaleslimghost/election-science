var mergeWith = require('lodash.mergewith');
var some = require('lodash.some');
var add = require('lodash.add');

module.exports = function sumResult(resultA, resultB) {
	if(some(resultB, isNaN)) throw new Error('nan');
	return mergeWith(resultA, resultB, add);
}
