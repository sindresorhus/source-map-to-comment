'use strict';
var test = require('ava');
var sourceMapToComment = require('./');

var sourceMapFixture = {
	version: 3,
	file: 'index.css',
	sources: [
		'index.scss'
	],
	sourcesContent: [],
	mappings: 'AAAA;EACE,AAAO;EACP,AAAQ;;AAGV,AAAQ;EACN,AAAiB;;AAGnB,AAAQ;EACN,AAAO;EAET,AAAQ,AAAG;IACP,AAAa',
	names: []
};

test(function (t) {
	t.assert(/\/\/# sourceMappingURL=data:application\/json;base64,\w+/.test(sourceMapToComment(sourceMapFixture)));
	t.end();
});
