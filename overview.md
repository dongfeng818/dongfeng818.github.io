# 中医独立站（Tender Root / 养根）— 项目概览

**日期**：2026-08-31（品牌更名 + 标识重设计落地）
**状态**：已上线部署，线上地址 https://96fbc7ae58f24a9a92df0ed7aee753fd.app.workbuddy.link （国内可访问）；本地预览 http://127.0.0.1:4321

## 做了什么

面向海外读者的中医知识科普静态网站，Astro 构建，英文 + 西班牙语 + 法语 + 简体中文四语完整版。品牌「Tender Root / 养根」——tender=温柔以待，root=根本/元气 + 植物扎根。

### 站点结构（68 个静态页面）

| 路由 | 内容 |
|---|---|
| `/` `/es/` `/fr/` `/zh/` | 首页：Hero、数据带、两大板块导航、体质测试推广位、精选文章 |
| `/basics/`（+es/fr/zh） | 中医基础理论板块列表页 |
| `/basics/[slug]`（+es/fr/zh） | 6 篇基础理论文章 × 4 语言 |
| `/wellness/`（+es/fr/zh） | 养生调理板块列表页 |
| `/wellness/[slug]`（+es/fr/zh） | 5 篇养生文章 × 4 语言 |
| `/constitution/`（+es/fr/zh） | **中医体质测试**（互动自测，见下） |
| `/glossary/`（+es/fr/zh） | 20 条中医术语词典（中文 + 拼音 + 释义） |
| `/about/`（+es/fr/zh） | 关于页 + 医学免责声明 |
| `/sitemap.xml` | 自动生成，67 个 URL |

### 品牌标识（2026-08-31 定稿）

用户提供 MERIDIAN 岐黄风格参考图，明确金色 S 曲线 = **经络**含义。最终方案「种子 + 金线经络 + 穴位」：

- **圆环**=天地循环；**种子/嫩豆**=扎根生命力（Tender Root 本义）；**金色 S 形经络线**贯穿种子=气血循行；**3 个穴位点**（中心点略大=丹田）=经络节点；**顶部双嫩芽 + 底部双根须穿出圆环**=扎根突破
- 配色：玉青绿 #2A6B57（种子/外环）+ 陶土金 #B4623D（经络/穴位）+ 浅玉绿 #9DBFB0（右芽/根须）
- 替换位置：首页 Hero（`HomePage.astro`，低透明度 quiet 风格，保留轨道/卫星装饰）、页头 Logo（`Header.astro`，28px 紧凑版 48 坐标系）、favicon（`public/favicon.svg`，深绿底反白版）

### 体质测试（2026-08-30 增补）

- 参照《中医体质分类与判定》（ZYYXH/T157-2009）设计的简化自评量表：9 种体质 × 5 题 = **45 题**，五级 Likert 记分
- 纯前端交互（Astro 静态页 + 内联 vanilla JS）：分页答题（5 题/页 × 9 步）、进度条、必答校验
- 计分采用标准**转化分**公式 `(原始分 − 条目数) / (条目数 × 4) × 100`，判定规则：偏颇体质 ≥40「是」、30–39「倾向是」；平和质 ≥60 且偏颇均 <30「是」、<40「基本是」
- 结果页：主体质卡片、兼有倾向列表、九种体质得分条形图、免责声明、重测按钮
- 数据在 `src/data/constitution.js`（四语），交互组件 `src/components/ConstitutionTestPage.astro`

### 内容清单（每篇均含中文术语、拼音、经典引文）

**基础理论**：阴阳、五行、气血津液、脏腑、经络穴位、舌脉诊断
**养生调理**：食疗、四时养生、睡眠养生、穴位按压、茶饮

### 技术要点

- Astro 4 静态生成，i18n 路由：`en` 无前缀，`/es/` `/fr/` `/zh/` 前缀；header 语言切换、footer、hreflang、og:locale 已接入
- 内容与模板分离：文章数据在 `src/data/`（按语言分文件），页面模板在 `src/components/`
- 自写轻量 sitemap 集成（@astrojs/sitemap 的 i18n 参数有版本 bug，已绕开；`SITE` 已指向线上域名）
- SEO：每页独立 title/description/canonical、hreflang 互链、Open Graph
- 视觉：暖白底（#FBFAF7 带噪点）+ 玉青绿主色（#2A6B57）+ 陶土金点缀（#B4623D），Fraunces 衬线标题 + Inter 正文，大圆角卡片、hero 三层光晕 + 同心圆轨道动画，移动端适配
- 合规：全站页脚 + 关于页均有医学免责声明（教育内容非医疗建议）

## 待办 / 后续

1. **内容扩展**：可继续增加板块（如「中医在海外」「经典古籍选读」），只需在 `src/data/` 加数据文件 + 路由
2. **分析工具**：接入 Google Search Console 提交 sitemap，建议加访客统计（Plausible/GA4）
3. **更多语言**：i18n 架构已预留扩展位（加一个 locale 只需加数据文件 + ui 字典）

## 常用命令

```bash
npm run dev      # 开发服务器
npm run build    # 构建到 dist/
npm run preview  # 本地预览构建产物（后台 0.0.0.0:4321）
```

## 部署

- CloudStudio 部署 `dist/`，分享链接 https://96fbc7ae58f24a9a92df0ed7aee753fd.app.workbuddy.link
- 重新部署：清 dist → `npx astro build` → 清理残留 `find dist -name "*.mjs" -delete; rm -rf dist/pages dist/chunks` → CloudStudio 部署
