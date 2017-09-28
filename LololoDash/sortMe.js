var _ = require('lodash');

var worker = function(articles) {
	return _.sortBy(articles, function (article) {
		return article.quantity * -1;
	});
}

module.exports = worker;