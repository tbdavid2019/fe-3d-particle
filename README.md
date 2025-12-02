# Gesture Particles (手勢 3D 粒子場)

一個用 Three.js + MediaPipe Hands 做的即時粒子展示，透過鏡頭偵測雙手開合來放大或縮小粒子群，並可切換多種造型與顏色。

## 功能
- 手勢驅動：雙手張開 → 粒子放大；雙手收合 → 粒子縮小。
- 造型面板：內建 heart/flower/saturn/fireworks/spiral 等分佈模板。
- 即時配色：色票選擇器直接更新粒子顏色。
- 現代介面：簡潔玻璃擬態控制面板，3D 畫布全幅呈現。

## 快速開始
1) 安裝依賴  
```bash
npm install
```
2) 啟動開發伺服器  
```bash
npm run dev
```
在瀏覽器開啟提示的本機網址，允許鏡頭存取。

3) 建置與預覽  
```bash
npm run build
npm run preview
```

## 使用方式
- 按鈕切換粒子造型；色票調整顏色。
- 將雙手置於鏡頭前，張開/握合即可改變粒子群縮放（狀態顯示在左上角）。

## 專案結構
- `src/main.js`：Three.js 場景、OrbitControls、UI 綁定。
- `src/particleSystem.js`：粒子幾何/材質、造型生成、插值動畫與旋轉。
- `src/handTracking.js`：MediaPipe Hands 設定，計算手部張開程度並回傳縮放因子。
- `index.html`、`src/style.css`：介面骨架與樣式。

## 技術說明
- 建立 8k 粒子使用 `THREE.BufferGeometry` + `THREE.PointsMaterial`，以插值方式平滑過渡造型。
- 手部模型透過 CDN 載入 `@mediapipe/hands`，相機影像由 `@mediapipe/camera_utils` 提供。
- 造型分佈包含心形、玫瑰曲線、土星環、球形煙火與螺旋。

## 已知限制與提示
- 需 HTTPS 或 `localhost` 才能取得鏡頭權限。
- 手部偵測受光線與背景影響，光線充足效果最佳。
- 若要離線使用 MediaPipe，可改為本地托管模型檔並調整 `locateFile`。
