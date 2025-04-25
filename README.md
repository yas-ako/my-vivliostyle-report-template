# My Vivliostyle Report Template

理工学系分野で使用するレポートのためのテンプレート

> created by [create-book](https://github.com/vivliostyle/create-book).

## このテンプレートは

- 作者：理工系大学一年生  
- 対象：大学の物理・数学・化学などのレポート


## サンプル

- [台本(manuscript.md)](./manuscript.md)
- [PDF(output.pdf)](./output/output.pdf)
- [スタイルシート](./theme/my-report-theme.css)

## 使い方（準備中）

- 使用しているフォント
  - Noto Sans JP
    - https://fonts.google.com/noto/specimen/Noto+Sans+JP
  - Noto Serif JP
    - https://fonts.google.com/noto/specimen/Noto+Serif+JP
  - 源ノ角ゴシック Code JP
    - https://github.com/adobe-fonts/source-han-code-jp/blob/master/README-JP.md
- VSCode 拡張機能
  - Run On Save
    - https://marketplace.visualstudio.com/items/?itemName=emeraldwalk.RunOnSave

## 目指すもの（未完成）

- 使用できる状態にするために
  - [x] フォント
    - 大体完了
  - [ ] 文字サイズ
  - [ ] ヘッダー
  - [x] ページ番号
    - [ ] 左右の端に寄せることもできるようにしたい
- 数式
  - [x] 数式番号を振る
    - おそらく問題なし
- 枠
  - [ ] 数式とか定義とかの枠
  - [x] 見出しのありなしを両方とも
    - たぶん完成した
- [ ] 改ページ
- [ ] 図表の挿入
- [ ] コードブロック
  - [ ] コードブロックらしく見た目を整える
- 執筆環境
  - [x] 保存のたびにPDFを生成
    - `settings.json`に設定した
    - VSCodeの拡張機能`Run On Save`が必要

## 参考資料

### コミットメッセージ

```
feat: 新しい機能を完成させた
fix: バグを修正した
docs: ドキュメントのみを変更した
style: 空白・セミコロン・ピリオドなどのフォーマットのみを編集した
refactor: リファクタリングをした
test: テストを編集した
chore: ビルド・補助ツール、ライブラリ等
```

### リンク

- VFM <https://vivliostyle.github.io/vfm/#/vfm>
- Vivliostyle CLI <https://github.com/vivliostyle/vivliostyle-cli#readme>
- Vivliostyle Themes <https://github.com/vivliostyle/themes#readme>
- Awesome Vivliostyle <https://github.com/vivliostyle/awesome-vivliostyle#readme>
- Vivliostyle (GitHub) <https://github.com/vivliostyle>
- Vivliostyle <https://vivliostyle.org>
