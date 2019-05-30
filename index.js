'use strict';

module.exports = (sourceMap, options = {}) => {
	const base64 = Buffer.from(typeof sourceMap === 'string' ? sourceMap : JSON.stringify(sourceMap)).toString('base64');
	const contents = `sourceMappingURL=data:application/json;base64,${base64}`;

	if (options.type === 'css') {
		return `/*# ${contents} */`;
	}

	return `//# ${contents}`;
};
