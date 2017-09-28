var _ = require('lodash');

var worker = function(logins) {
	var temp = _.template('Hello <%= name %> (logins: <%= loginNum %>)')({
		name: logins.name,
		loginNum: logins.login.length
	});
	return temp;
}

module.exports = worker;