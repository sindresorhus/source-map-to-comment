import {Buffer} from 'node:buffer';

export default function sourceMapToComment(sourceMap, {type} = {}) {
	const base64 = Buffer.from(typeof sourceMap === 'string' ? sourceMap : JSON.stringify(sourceMap)).toString('base64');
	const contents = `sourceMappingURL=data:application/json;base64,${base64}`;

	if (type === 'css') {
		return `/*# ${contents} */`;
	}

	return `//# ${contents}`;
}
