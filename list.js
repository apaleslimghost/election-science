var apportion = require('./apportion');

var euConstituencies = {
	'London': 7836,
	'South East': 8520,
	'South West': 5303,
	'West Midlands': 5456,
	'North West':	6983,
	'North East': 2606,
	'Yorkshire and The Humber': 5301,
	'East Midlands': 4481,
	'Eastern': 5832,
	'Northern Ireland':	1799,
	'Scotland': 5223,
	'Wales': 3007,
};

module.exports = apportion(150, euConstituencies);
