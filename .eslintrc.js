module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  rules: {
    camelcase: [
      'warn',
      {
        ignoreDestructuring: true,
      },
    ],
    'default-param-last': 'error',
    'guard-for-in': 'error',
    'no-alert': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-loop-func': 'error',
    'no-nested-ternary': 'error',
    'no-return-assign': ['error', 'always'],
    'no-shadow': 'error',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-rest-params': 'error',
    radix: 'error',
  },
  overrides: [
    {
      files: 'functions/**/*',
      env: {
        node: true,
      },
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
