# Deprecated

The pragma was deprecated in React.

---

# react-dom-pragma [![Build Status](https://travis-ci.org/sindresorhus/react-dom-pragma.svg?branch=master)](https://travis-ci.org/sindresorhus/react-dom-pragma)

> Prepend the [JSX React DOM pragma](http://facebook.github.io/react/docs/jsx-in-depth.html) to a string if doesn't already contain a pragma


## Install

```
$ npm install --save react-dom-pragma
```


## Usage

```js
const reactDomPragma = require('react-dom-pragma');

reactDomPragma('const unicorn = "rainbow";');
//=> '/** @jsx React.DOM */\nconst unicorn = "rainbow";'
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
