var _ = require('lodash');

var worker = function(towns) {
	climate = {hot: [], warm: []};
	var tempchecker = function (temp) {return temp > 19;};
	_.forEach(towns, function (temps, town) {
		if (_.every(temps, tempchecker)) {
			climate.hot.push(town);
		} else if (_.some(temps, tempchecker)) {
			climate.warm.push(town);
		}
	});
	return climate;
}

module.exports = worker;