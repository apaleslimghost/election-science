var results = require('./results.json');
var sum = require('lodash.sum');
var values = require('lodash.values');
var mapValues = require('lodash.mapvalues');

var euConstituencies = {
	'London': 7836,
	'South East': 8520,
	'South West': 5303,
	'West Midlands': 5456,
	'North West':	6983,
	'North East': 2606,
	'Yorkshire and the Humber': 5301,
	'East Midlands': 4481,
	'Eastern': 5832,
	'Northern Ireland':	1799,
	'Scotland': 5223,
	'Wales': 3007,
};

function apportion(total, bits) {
	var s = sum(values(bits));
	return mapValues(bits, x => Math.round(total * x / s));
}

module.exports = apportion(325, euConstituencies);
