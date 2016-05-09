var mapValues = require('lodash.mapvalues');
var groupBy = require('lodash.groupby');
var add = require('lodash.add');
var map = require('lodash.map');
var some = require('lodash.some');
var compose = require('lodash.compose');
var property = require('lodash.property');
var iteratee = require('lodash.iteratee');

var sumResult = require('./sum-result');

module.exports = function sumResults(results, getResults, getKey, getValue) {
	return map(results, r =>
		mapValues(
			groupBy(getResults(r), getKey),
			compose(iteratee(getValue), property('0'))
		)
	).reduce(sumResult, {});
};
