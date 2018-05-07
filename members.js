var fptp = require('./fptp');
var sumResult = require('./sum-result');

module.exports = function(constituencies) {
	return constituencies.map(r => {
		var out = {};
		var party = fptp(r.results);
		out[party] = 1;
		return out;
	});
}
