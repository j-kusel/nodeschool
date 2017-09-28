var _ = require('lodash');

var worker = function (freelancers) {
	let average = _.meanBy(freelancers, (fl) => fl.income);
	let under = _.chain(freelancers)
		.filter((fl) => fl.income <= average)
		.orderBy('income');
	let over = _.chain(freelancers)
		.filter((fl) => fl.income > average)
		.orderBy('income');
	return {
		"average": average,
		"underperform": under,
		"overperform": over
	}
}

module.exports = worker;