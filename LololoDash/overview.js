var _ = require("lodash");

var worker = function(orders) {
	return _.chain(orders)
		.reduce(function (result, order, key) {
			if (!result[order.article]) result[order.article] = order.quantity
				else result[order.article] += order.quantity;
			return result;
		}, {})
		.map(function (value, key) {
			return _.extend({'article':parseInt(key), 'total_orders':value});
		})
		.orderBy(function (article) {
			return article.quantity * -1;
		});
};

module.exports = worker;