module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'arrow-parens': 'off',
    'no-trailing-spaces': 'off',
    'operator-linebreak': 'off',
  },
  eslintPath: 'eslint/use-at-your-own-risk',
};
