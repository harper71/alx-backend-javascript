import { FlatCompat } from '@eslint/eslintrc';
import airbnbBase from 'eslint-config-airbnb-base';
import importPlugin from 'eslint-plugin-import';

// Compatibility layer for old-style ESLint configs
const compat = new FlatCompat();

export default [
  ...compat.extends('airbnb-base'),
  {
    files: ['*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      // Your custom rules here
    },
  },
];
