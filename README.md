# 檔案結構說明
## build
放置部署檔案
## proposal
放置網站企劃書
## public
放置渲染頁面index.html及爬蟲規範文件robot.txt
## src
最外層之index.js及index.css分別放置router及最上層之css規範
#### Components
放置Reat Component，其中，分為atoms、molecules及organisms。atoms放置最簡單之組件，例如相框、返回鍵等；molecules則為atoms組成之元件，例如網站右邊區域；organisms則為數個molecules組成的元件，例如左側之固定導航欄。
#### Layout
放置每頁之渲染元件及規則

---

## .babelrc & babel-plugin-macros.config.js
babel編譯器設定檔（因fontansome需要）
## package.json & yarn.lock
react套件列表及部署指令設定
## .gitignore
版本管理設定