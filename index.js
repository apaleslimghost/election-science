var additional = require('./additional');
var sumResult = require('./sum-result');
var reduce = require('lodash.reduce');
var pickBy = require('lodash.pickby');

console.log(pickBy(reduce(additional, sumResult)));
