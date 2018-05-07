var additional = require('./additional');
var sumResult = require('./sum-result');
var reduce = require('lodash.reduce');
var pickBy = require('lodash.pickby');


var mem = require('./members')(require('./results.json'));
var add = pickBy(reduce(additional, sumResult));

console.log('members', mem);
console.log('additional', add);

console.log('total', sumResult(mem.reduce(sumResult, {}), add));
