import test from 'ava';
import fn from './';

test(t => {
	const a = '/** @jsx React.DOM */\nvar foo = true;';
	t.is(fn(a), a);
	t.is(fn('var foo = true;'), a);
});
