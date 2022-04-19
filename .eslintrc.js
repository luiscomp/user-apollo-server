module.exports = {
	env: {
		node: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:eqeqeq-fix/recommended'
	],
	plugins: [
		'unused-imports'
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		'sort-imports': [
			'error',
			{
				'ignoreDeclarationSort': true
			}
		],
		'no-unused-vars': 'off',
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'error',
			{
				'vars': 'all',
				'varsIgnorePattern': '^_',
				'args': 'after-used',
				'argsIgnorePattern': '^_'
			}
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'space-before-function-paren': [
			'error', 
			'never'
		],
		'object-curly-spacing': [
			'error', 
			'always'
		],
		'array-bracket-spacing': [
			'error', 
			'always'
		],
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'eqeqeq': [
			'error', 
			'always'
		],
		'comma-dangle': [
			'error', 
			'never' 
		]
	}
};
