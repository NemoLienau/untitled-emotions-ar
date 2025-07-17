import parser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser,
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly'
      }
    },
    rules: {},
  },
];
