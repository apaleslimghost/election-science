var maxBy = require('lodash.maxby');

module.exports = function(results) {
	return maxBy(results, 'votes').party;
};
