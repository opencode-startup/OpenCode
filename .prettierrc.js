module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-classnames', 'prettier-plugin-merge'],
  tailwindFunctions: ['tv'],
  customAttributes: ['class'],
  customFunctions: ['clsx', 'tv'],
  tailwindConfig: './tailwind.config.ts',
};
