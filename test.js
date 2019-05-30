import test from 'ava';
import sourceMapToComment from '.';

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
		sourceMapToComment(sourceMapFixture),
		/\/\/# sourceMappingURL=data:application\/json;base64,\w+/
	);
});

test('string argument', t => {
	t.is(
		sourceMapToComment(sourceMapFixture),
		sourceMapToComment(JSON.stringify(sourceMapFixture))
	);
});

test('type option', t => {
	t.regex(
		sourceMapToComment(sourceMapFixture, {type: 'css'}),
		/\*# sourceMappingURL=data:application\/json;base64,\w+ \*\//
	);
});
