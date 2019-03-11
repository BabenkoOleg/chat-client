module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'arrow-parens': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    'no-return-assign': 'off',
    'no-unused-expressions': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': ['off', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
