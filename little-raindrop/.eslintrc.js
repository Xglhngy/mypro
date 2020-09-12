module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    // 'prettier',
    // 'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],

  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': 'off',
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'always-multiline': 'off',
    'no-extra-parensi': 'off',
    'no-extra-semi': 'off'
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     endOfLine: 'auto'
    //   }
    // ]
  }
}
