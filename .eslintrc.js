module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/style-prop-object': [
      'error',
      {
        allow: ['StatusBar'],
      },
    ],
    'no-shadow': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
        endOfLine: 'lf',
        printWidth: 120,
      },
    ],
  },
};
