var groupBy = require('lodash.groupby');
var mapValues = require('lodash.mapvalues');

var apportion = require('./apportion');
var list = require('./list');
var sumResults = require('./sum-results');
var groupedResults = require('./grouped-results');

function sumAllResults(results) {
	return results.map(r => mapValues(groupBy(r.results, 'party'), '[0]votes')).reduce(sumResults, {});
}

var votes = mapValues(groupedResults, sumAllResults);

module.exports = mapValues(votes, (result, name) => {
	return apportion(list[name], result);
});
