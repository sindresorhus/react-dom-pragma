import test from 'ava';
import m from '.';

test(t => {
	const a = '/** @jsx React.DOM */\nconst foo = true;';
	t.is(m(a), a);
	t.is(m('const foo = true;'), a);
});
