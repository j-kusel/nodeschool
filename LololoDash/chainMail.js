var _ = require('lodash');

var worker = function(words) {
	return _.chain(words)
		.sortBy(function (word) {
			return word.charCodeAt();
		})
		.map(function (word) {
			return _.toUpper(word + 'Chained');
		});
}

module.exports = worker;