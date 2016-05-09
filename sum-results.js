var mergeWith = require('lodash.mergewith');
var mapValues = require('lodash.mapvalues');
var groupBy = require('lodash.groupby');
var add = require('lodash.add');
var map = require('lodash.map');
var some = require('lodash.some');

function sumResults(resultA, resultB) {
	if(some(resultB, isNaN)) throw new Error('nan');
	return mergeWith(resultA, resultB, add);
}

module.exports = function sumAllResults(results, getResults, keyKey, valueKey) {
	return map(results, r =>
		mapValues(
			groupBy(getResults(r), keyKey),
			'[0]' + valueKey
		)
	).reduce(sumResults, {});
};
