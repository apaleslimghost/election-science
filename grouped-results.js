var groupBy = require('lodash.groupby');
var property = require('lodash.property');

var results = require('./results.json');

module.exports = groupBy(results, result => property('parent.officialname')(result) || 'Scotland');
