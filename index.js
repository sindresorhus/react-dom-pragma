'use strict';
const hasJsxPragma = require('has-jsx-pragma');

module.exports = input => hasJsxPragma(input) ? input : `/** @jsx React.DOM */\n${input}`;
