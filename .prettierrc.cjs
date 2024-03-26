module.exports = {
  "useTabs": false,
  "tabWidth": 2,
  "endOfLine": "lf",
  "trailingComma": "none",
  "semi": true,
  "singleQuote": true,
  "bracketSpacing": true,
  "importOrder": ["^@core/(.*)$", "^[./]"],
  "cssDeclarationSorterKeepOverrides": false,
  "plugins": [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-css-order",
    "prettier-plugin-tailwindcss"
  ]
}
