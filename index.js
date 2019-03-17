'use strict';
module.exports = function (val, opts) {
	opts = opts || {};

	const base64 = Buffer.from(typeof val === 'string' ? val : JSON.stringify(val)).toString('base64');
	const contents = 'sourceMappingURL=data:application/json;base64,' + base64;

	if (opts.type === 'css') {
		return '/*# ' + contents + ' */';
	}

	return '//# ' + contents;
};
