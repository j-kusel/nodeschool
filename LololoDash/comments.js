// LololoDash Getting Started

var _ = require('lodash');

var worker = function(comments) {
	return _.chain(comments)
		.groupBy('username')
		.map((clist, user) => {
			return {'username':user, 'comment_count':_.size(clist)}
		})
		.sortBy((user) => {
			return user.comment_count * -1;
		});

};

module.exports = worker;

