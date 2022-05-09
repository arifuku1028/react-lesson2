# React の環境構築

## 環境説明

- Node.js v14.17.4
- Yarn v1.22.18
- React/React-DOM v17.0.2
- ESLint, Prettier（保存時に実行・整形）

## 実行方法

1. React 作成
   ```
   yarn create react-app lesson2
   ```
2. React, React-DOM のバージョンダウン
   ```
   cd lesson2
   yarn remove react react-dom
   yarn add react@17.0.2 react-dom@17.0.2
   ```
3. index.js の変更(React18⇨17)
4. React 実行
   ```
   yarn start
   ```
5. 実行確認  
   http://localhost:3000
