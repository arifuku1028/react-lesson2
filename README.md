# React の環境構築

## 環境説明

- React（v17.0.2）
- 使用ライブラリ
  - dayjs（日付に関する処理）
  - react-day-picker（日付を選択する UI）
  - react-dropzone（ファイルのドラッグアンドドロップ処理）
  - react-beautiful-dnd（ドラッグアンドドロップで DOM 位置を変更）
  - @emotion/react（CSS ライブラリ）
  - styled-components(CSS ライブラリ)
- 開発用ライブラリ
  - ESLint（コード検証）
  - Prettier（コード整形）
  - husky（'git commit'の時にスクリプト実行）
  - lint-staged（'git add'されたファイルを修正してくれる〜再 add が不要）

## 実行方法

1. GitHub リポジトリから Clone
   ```
   git clone https://github.com/arifuku1028/react-lesson2.git
   ```
2. カレントディレクトリの移動
   ```
   cd react-lesson2/
   ```
3. React 実行
   ```
   yarn start
   ```
4. 実行確認  
   http://localhost:3000
   ブラウザでご確認ください
