# source-map-to-comment [![Build Status](https://travis-ci.org/sindresorhus/source-map-to-comment.svg?branch=master)](https://travis-ci.org/sindresorhus/source-map-to-comment)

> Convert a Source Map object to a comment

Use [inline-source-map-comment](https://github.com/shinnn/inline-source-map-comment) if you need more options. (e.g. CSS source map support)

## Install

```
$ npm install --save source-map-to-comment
```


## Usage

```js
var sourceMapToComment = require('source-map-to-comment');
var sourceMap = getSourceMapFromSomething();

sourceMapToComment(sourceMap);
//=> '//# sourceMappingURL=data:application/json;base64,eyJ2Z...'
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
