module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:vue/essential', 'plugin:vue/recommended', 'eslint:recommended', '@vue/prettier'],
  // 'plugin:vue/strongly-recommended', 'airbnb-base/legacy', 'plugin:vue/base'
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': 'off',
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    // 'no-empty': 0,
    // 'vue/no-unused-components': 0,
    // 'vue/no-use-v-if-with-v-for': 0,
  },
}
