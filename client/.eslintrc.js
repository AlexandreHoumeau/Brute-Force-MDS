module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  settings: {
    // Ensure you're defining the correct React version here
    react: { version: '16.5.0' }
  },
  parserOptions: {
    // Enable JSX support
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  parser: 'babel-eslint',
  rules: {
    // Add any additional rules here
    'react/-types': 0
  }
}
