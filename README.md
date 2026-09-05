# 世田谷区向け 訪問美容サイト

Astro + GitHub Pages向けの静的サイトです。

## 方針
営業地域を世田谷区中心に絞っています。

重点対応地域:
成城 / 砧 / 祖師谷 / 上用賀 / 用賀 / 瀬田 / 玉川 / 二子玉川 / 等々力 / 尾山台 / 奥沢

## 公開前に変更
`src/pages/index.astro` の business:
- name
- phone
- email

料金は menus を編集します。

## 地域情報
`src/data/areas.ts`

## GitHub Pages
1. Public repositoryへアップロード
2. Settings > Pages
3. Source = GitHub Actions
4. Actionsを実行
