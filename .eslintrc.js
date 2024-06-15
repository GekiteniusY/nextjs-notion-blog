module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser', // TypeScript用のパーサーを指定
  plugins: [
    '@typescript-eslint', // TypeScriptプラグインを追加
    'react', // Reactのルールを使うために追加
  ],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended', // TypeScriptの推奨設定を追加
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // 型チェックを要求する推奨設定を追加
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}', // ESLintの設定ファイル自体に対する設定
      ],
      parserOptions: {
        sourceType: 'script', // 設定ファイルはCommonJSモジュールとして扱う
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json', // TypeScriptのコンパイル設定を指定
    tsconfigRootDir: __dirname, // tsconfig.jsonが存在するディレクトリを指定
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }], // JSXのファイル拡張子に.tsxも許可
    'react/jsx-props-no-spreading': [1, {
      custom: 'ignore',
    }],
    'react/prop-types': [0], // TypeScriptを使用しているのでpropTypesは不要
    '@typescript-eslint/explicit-module-boundary-types': [0], // 明示的な関数の返り値の型指定を要求しない
    '@typescript-eslint/no-unused-vars': [1], // 未使用変数は警告として報告
  },
};
