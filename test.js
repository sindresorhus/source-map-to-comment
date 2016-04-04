import test from 'ava';
import fn from './';

const sourceMapFixture = {
	version: 3,
	file: 'index.css',
	sources: [
		'index.scss'
	],
	sourcesContent: [],
	mappings: 'AAAA;EACE,AAAO;EACP,AAAQ;;AAGV,AAAQ;EACN,AAAiB;;AAGnB,AAAQ;EACN,AAAO;EAET,AAAQ,AAAG;IACP,AAAa',
	names: []
};

test('main', t => {
	t.regex(
		fn(sourceMapFixture),
		/\/\/# sourceMappingURL=data:application\/json;base64,\w+/
	);
});

test('type option', t => {
	t.regex(
		fn(sourceMapFixture, {type: 'css'}),
		/\*# sourceMappingURL=data:application\/json;base64,\w+ \*\//
	);
});
