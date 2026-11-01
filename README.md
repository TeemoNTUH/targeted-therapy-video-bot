# 🎬 掌握治療旅程：頭頸癌標靶治療 - 影音問答系統

**🔗 Cloudflare Workers Demo：<https://targeted-therapy-video-bot.teemo-f15.workers.dev>**

醫院實習期間開發的字幕檢索問答展示系統。使用者可針對《掌握治療旅程：頭頸癌標靶治療》影片內容提問，系統會搜尋本機逐字稿分段，回傳相關字幕並**跳轉到對應影片時間點**。目前回答是依字幕內容檢索，不是 AutoRAG 或 LLM 生成式回答。

> 本專案是供來院實習生了解 RAG 智慧問答系統概念的展示專案，僅供學習與展示。影片內容為衛教用途，非醫療建議。

影片與字幕素材權利及人工校對注意事項請見 [DATA_NOTICES.md](./DATA_NOTICES.md)。

## 功能

- 影片 + 逐字稿同步播放，字幕檢索結果可跳轉到對應時間點
- 針對標靶治療常見問題提供衛教助理式回答，例如：
  - 標靶治療常見的副作用有哪些？
  - 頭頸癌在什麼階段適合進行標靶治療？
  - 標靶治療與傳統化學治療有什麼不同？
  - 標靶治療會影響哪些身體器官或功能？
- 對話式介面，可持續追問

## 系統運作方式

1. 衛教影片逐字稿整理為有時間戳的段落，存放於 `src/transcriptData.ts`
2. Worker 依使用者問題搜尋相關字幕段落
3. 前端顯示字幕內容與時間點，並提供影片跳轉功能
4. Worker 從 Cloudflare R2 串流提供影片

## 逐字稿處理流程

測試與合成資料由 [@TeemoNTUH](https://github.com/TeemoNTUH) 提供。以下工具用於將影片轉成可檢索逐字稿：

- `mp4_to_transcript.py` — 用 `faster-whisper` 將影片轉成逐字稿（`.srt` + `.txt`）
- `update_transcript_v2.py` — 讀取專案根目錄的 SRT，產生有標題、起訖秒數的段落（`src/transcriptData.ts`），供前端搜尋與跳轉使用

> 影片原始檔未包含在此 repo 中；Worker 從 `video-rag-bucket` 讀取 `掌握治療旅程：頭頸癌標靶治療.mp4`，字幕索引由專案根目錄的同名 `.srt` 產生。

字幕含語音辨識內容，尚需人工校對；請先檢閱 [逐字稿校對清單](./SUBTITLE_REVIEW.md)，勿未經核對即作為醫療衛教依據。

## 技術架構 (Cloudflare)

| 元件 | 用途 |
|---|---|
| Cloudflare Workers | Serverless 後端 / API，同時提供線上 Demo |
| Durable Objects | 對話狀態管理 |
| R2 Storage | 衛教影片儲存與串流 |

前端：React 18 + TypeScript + Emotion（CSS-in-JS）+ esbuild 打包

## 本機開發 / 部署

```bash
npm install

wrangler login

wrangler r2 bucket create video-rag-bucket
# 如尚未上傳影片，將它存成以下 object key；影片原始檔不包含在 repo 中
npx wrangler r2 object put "video-rag-bucket/掌握治療旅程：頭頸癌標靶治療.mp4" --file .\path\to\掌握治療旅程：頭頸癌標靶治療.mp4 --remote

npm run build
wrangler deploy
```

## 已知限制與未來規劃

- 逐字稿時間戳段落目前為手動切分，影片較長時需人工核對切點是否合理
- 規劃：支援多支衛教影片，並讓使用者提問時可跨影片查找相關段落

## 專案背景

本專案以經原作者授權的 [Cloudflare Workers + AutoRAG 範例](https://github.com/elizabethsiegle/chat-w-taylor-on-newheights-and-travis-gq-autorag-openaioss) 為起點，在醫院實習期間改造為衛教影片逐字稿問答用途，並加入影片時間點自動跳轉功能。
