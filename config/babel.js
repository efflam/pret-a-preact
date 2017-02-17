module.exports = {
	presets: [
		['es2015', {loose: true, modules: false}],
		'stage-2'
	],
	plugins: [
		"styled-jsx/babel",
		['transform-react-jsx', {pragma: 'h'}]
	]
};
