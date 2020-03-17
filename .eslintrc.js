module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb', 'plugin:react/recommended' ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true, 'mode': 'strict' }],
    'jsx-quotes':[2, 'prefer-single'],
    'max-len': [2, 160, 2, { 'ignoreTemplateLiterals': true }],
    'object-curly-spacing': [2, 'always'],
    'semi': ['error', 'always'],
    'linebreak-style': [0],
    'no-debugger': [0],
    'comma-dangle':  ['error', {
      'arrays': 'never',
      'objects': 'never',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }],
    'import/no-dynamic-require': [2],
    'import/no-extraneous-dependencies': [0],
    'react/jsx-no-bind': [2, {
      'ignoreRefs': false,
      'allowArrowFunctions': true,
      'allowBind': false
    }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-one-expression-per-line': ['error', { 'allow': 'none' }],
    'react/forbid-prop-types': [2],
    'react/no-did-mount-set-state': [2],
    'react/no-set-state': [2],
    'react/no-danger': [2],
    'react/jsx-boolean-value': [2, 'never'],
    'react/prefer-stateless-function': [1],
    'lines-between-class-members': ['error','always', { exceptAfterSingleLine: true }],
    'no-param-reassign': [2, { 'props': false }],
    'no-unused-expressions': [0],
    'no-underscore-dangle': [0],
    'class-methods-use-this': [0],
    'import/no-unresolved': ['off'],
    'import/prefer-default-export': ['warn'],
    'jsx-a11y/role-support-aria-props': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/label-has-for': [1],
    'jsx-a11y/no-noninteractive-element-interactions': [0],
    'jsx-a11y/mouse-events-have-key-events': [0],
    'no-unused-vars': [0],
    'import/extensions': [0],
    'max-params': [2, 4],
    'object-curly-newline': [0],
    'operator-linebreak': ['error', 'after', { 'overrides': {
        '?': 'before',
        ':': 'before',
        '||': 'before',
        '&&': 'before',
        '!': 'before',
        'delete': 'before',
        'instanceof': 'before'
      } }],
    'no-trailing-spaces': ['error', { 'skipBlankLines': true }],
    'object-property-newline': ['error', { 'allowMultiplePropertiesPerLine': true }],
    'dot-location': ['error', 'property'],
    'indent': ['error', 2, {
      'SwitchCase': 1
    }],
    'react/jsx-props-no-spreading': [0],
    'no-useless-constructor': [0],
    'no-empty-function': [0],
    'consistent-return': [0],
    'arrow-body-style': [0],
    'react/state-in-constructor': [0],
    'prefer-promise-reject-errors': [0],
    'react-hooks/exhaustive-deps': [0],
    'import/order': [0]
  },
  overrides: [
    {
      'files': ['**/*.tsx'],
      'rules': {
        'react/prop-types': 'off'
      }
    }
  ]
};
