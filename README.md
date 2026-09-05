# 訪問美容 Astro + AEO/SEO

追加済み:
- JSON-LD: LocalBusiness / HealthAndBeautyBusiness / Service / FAQPage / WebSite
- canonical
- OGP / Twitter Card
- robots meta
- robots.txt
- sitemap
- llms.txt
- FAQと対象者の明示
- GitHub Pages自動デプロイ

公開前に `src/pages/index.astro` の business / menus / faqs を実データへ変更してください。

また `public/robots.txt` の Sitemap URL は仮です。
GitHub Pagesの実URLへ変更してください。

ローカル:
npm install
npm run dev

公開:
GitHub repositoryへpush → Settings > Pages → Source: GitHub Actions


## 地域別ページ

`src/data/areas.ts` の配列から `/area/[slug]/` を自動生成します。

現在のサンプル:
- 世田谷区
- 目黒区
- 町田市

実際に営業する地域だけ残してください。営業実態のない地域ページを大量生成するのは避けてください。
