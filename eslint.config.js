import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import refresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import testingLibrary from 'eslint-plugin-testing-library'
import cypress from 'eslint-plugin-cypress'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default [
  { ignores: ['dist', '*.cjs'] },
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactHooks.configs.flat.recommended,
  importPlugin.flatConfigs.recommended,
  testingLibrary.configs['flat/react'],
  cypress.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  refresh.configs.vite,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.jest, vi: true },
      parserOptions: { ecmaFeatures: { jsx: true } }
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': { node: { extensions: ['.js', '.jsx'] } }
    },
    rules: {
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'react/prop-types': 'off',
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_'
        }
      ],
      'import/named': 'off',
      'import/no-unresolved': [
        'error',
        { ignore: ['^@uiw/github-corners$', '^vite$', '^@vitejs/plugin-react$'] }
      ],
      'cypress/unsafe-to-chain-command': 'off'
    }
  }
]
