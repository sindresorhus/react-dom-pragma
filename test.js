'use strict';
var test = require('ava');
var reactDomPragma = require('./');

test(function (t) {
	var a = '/** @jsx React.DOM */\nvar foo = true;';
	t.assert(reactDomPragma(a) === a);
	t.assert(reactDomPragma('var foo = true;') === a);
	t.end();
});
