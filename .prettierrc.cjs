module.exports = {
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'none',
  semi: true,
  singleQuote: true,
  importOrder: ['^@core/(.*)$', '^[./]'],
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-css-order',
    'prettier-plugin-tailwindcss'
  ]
};
