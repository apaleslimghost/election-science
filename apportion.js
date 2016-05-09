var sum = require('lodash.sum');
var values = require('lodash.values');
var mapValues = require('lodash.mapvalues');

module.exports = function apportion(total, bits) {
	var s = sum(values(bits));
	return mapValues(bits, x => Math.round(total * x / s));
};
