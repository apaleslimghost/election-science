var mapValues = require('lodash.mapvalues');
var property = require('lodash.property');

var apportion = require('./apportion');
var list = require('./list');
var sumResults = require('./sum-results');
var groupedResults = require('./grouped-results');

module.exports = mapValues(groupedResults, (result, name) => {
	return apportion(list[name], sumResults(
		result,
		property('results'),
		'party',
		'votes'
	));
});
