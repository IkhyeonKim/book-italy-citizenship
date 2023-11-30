module.exports = {
  extends: ['eslint:recommended', '@electron-toolkit/eslint-config-ts/recommended'],
  rules: {
    rules: {
      '@typescript-eslint/explicit-function-return-type': 0
    },
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  }
};
