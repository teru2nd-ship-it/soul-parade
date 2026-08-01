# SOUL PARADE 手描き素材リスト

更新: 2026-08-01

主要背景、ボス、主人公、門、危険物、試練道具までNano banana2調で揃い、全編を試遊できます。未制作項目は追加演出用の任意素材だけです。

## 2026-08-01 Stage 3ピン抜き背景刷新

- 状態: 広告ゲームの縦塔構成を読みやすさの参考にし、SOUL PARADE専用のオリジナル冥界水路塔を生成・組み込み済み
- ゲーム用: `assets/backgrounds/pin-puzzle-tower.webp`（640×858、68KB）
- 原寸保全: `assets/backgrounds/source/pin-puzzle-tower-v1.png`（1083×1452）
- 構成: 忘却の川に立つ石造塔、3つの広い区画、最下部の救出口。人物・液体・ピン・文字は背景へ焼き込まず、Canvas側で重ねる
- Canvas描画: 清めの水、業火と鎮火、落石、重り、小さい魂、左右リング付き金属ピン、誤順時の業火逆流
- 既存広告のキャラクター、UI、文言、レベル配置、ブランドは転用していない
- 390×844と320×568で一画面収まり、3ラウンド完走、自動リトライ、魂喰らい遷移を確認済み

## 優先度 A

### 1. 万神冥界市の縦背景

- 状態: 2026-08-01 初稿を生成・組み込み済み
- ゲーム用: `assets/backgrounds/pantheon-underworld-market.webp`
- 原寸保全: `assets/backgrounds/source/pantheon-underworld-market-v1.png`
- 用途: Stage 5の全面背景
- 構図: 中央45%を歩ける参道として空ける
- 混成要素: 日本の鳥居と提灯、西洋の石柱と冥府の舟、エジプト風の天秤、インド風の蓮華と曼荼羅
- トーン: 冥界だが祭りのように少し楽しい。暗部だけで潰さない
- 人物・文字: なし
- 現在の初稿: 941×1672。構図と実機可読性を確認後、必要なら高解像度版へ差し替える
- 推奨最終版: 1536×2732以上、PNGまたは高品質WebP

### 2. 千面の門番

- 状態: 2026-08-01 原画受領・透過WebP化・Stage 5クリア画面へ組み込み済み
- ゲーム用: `assets/characters/thousand-faced-gatekeeper.webp`
- 原画保全: `assets/characters/source/thousand-faced-gatekeeper-original.jpg`
- 用途: 万神冥界市の締め役
- デザイン: 鬼面、山犬面、獅子面を持つ架空の門番。怖さ6・おかしさ4
- 宗教上の神そのものではなく、各地の冥界を巡回するオリジナル係員
- 推奨: 透過PNG、正面全身、1536×2048前後

### 3. ミニゲーム道具3点

- 状態: 2026-08-01 原画受領・4スプライトへ分割・三試練へ組み込み済み
- ゲーム用: `assets/props/memory-balance.webp`、`reincarnation-drum.webp`、`transit-token-torii.webp`、`transit-token-labyrinth.webp`
- 原画保全: `assets/props/source/pantheon-trial-tools-original.jpg`
- 羽根と記憶の天秤: 羽根、鈴、貝殻、仮面、小舟
- 輪廻の太鼓: 東・西・天・地の4色太鼓
- 冥界乗換印: 鳥居、舟、蓮華、星門の4印
- 推奨: それぞれ透過PNG。白い市松模様を背景として描き込まない

### 4. 冥界蛾

- 状態: 2026-08-01 原画受領・透過WebP化・Stage 4中ボスへ組み込み済み
- ゲーム用: `assets/bosses/underworld-moth.webp`
- 原画保全: `assets/bosses/source/underworld-moth-original.jpg`
- 用途: Stage 4中ボス
- Canvas仮絵は画像読込失敗時のフォールバックとして保持
- デザイン: 夜色の大蛾。翅の眼状紋が眠る魂の顔に見える
- 推奨: 透過PNG、正面、横幅1536px前後

## 優先度 B

### 5. 首なし武者

- 状態: 2026-08-01 Nano banana2統一版を透過WebP化・輪廻の塔中ボスへ組み込み済み
- ゲーム用: `assets/bosses/headless-warrior-nanobanana2.webp`
- Nano banana2原画保全: `assets/bosses/source/headless-warrior-nanobanana2-original.jpg`
- 透過原寸保全: `assets/bosses/source/headless-warrior-nanobanana2-cutout.png`
- 旧TERU原画・調整版: `headless-warrior-v2.webp`、`headless-warrior-v3.webp`と各ソースを予備素材として保持
- 用途: 輪廻の塔中層
- デザイン: 右手の長刀を最前面に構え、左脇に角・般若面・牙・髭の自分の頭を抱える重い甲冑武者
- 旧PNGとCanvas描画は画像読込失敗時の参照・フォールバックとして保持
- 推奨: 透過PNG、正面または斜め正面

### 6. 輪廻の塔の縦背景

- 状態: 2026-08-01 Nano banana2原画を軽量WebP化・Stage 6へ組み込み済み
- ゲーム用: `assets/backgrounds/reincarnation-tower.webp`
- 原画保全: `assets/backgrounds/source/reincarnation-tower-nanobanana2-original.jpg`
- 用途: 最終スクロール背景
- 構図: 中央に登攀路。上へ行くほど和・西洋・インドの建築が一つの光へ収束
- 文字・人物: なし
- 推奨: 1536×3072以上。上下ループしやすい雲・壁面構成

### 主要キャラ・小物の最終統一セット

- 状態: 2026-08-01 原画受領・用途別に分割・透過WebP化・ゲームへ組み込み済み
- 原画保全: `assets/bosses/source/nanobanana2-final-boss-sheet-original.jpg`
- 魂喰らい: `assets/bosses/soul-eater-nanobanana2.webp`
- 死神: `assets/bosses/reaper-nanobanana2.webp`
- 閻魔: `assets/bosses/enma-nanobanana2.webp`
- 霊鳥: `assets/bosses/spirit-bird-nanobanana2.webp`（Codex修正版。左右の翼、胴体から尾の連続性、外周欠けを補正）
- 霊鳥修正版原画: `assets/bosses/source/spirit-bird-codex-corrected-original.png`
- 霊鳥修正版透過PNG: `assets/bosses/source/spirit-bird-codex-corrected-cutout.png`
- 主人公魂: `assets/characters/guide-soul-nanobanana2.webp`
- 集める味方魂（採用版）: `assets/characters/little-soul-teru-v2.webp`（TERU手描き原案。縦長の火のしずく、上端の三つの炎、大きな黒い目、小さな口）
- TERU手描き原画: `assets/characters/source/little-soul-teru-sketch-original.jpg`
- ピクセル化生成元: `assets/characters/source/little-soul-teru-render-v2-chroma.png`
- 透過保全PNG: `assets/characters/source/little-soul-teru-render-v2-cutout.png`
- 旧味方魂（参照保全）: `assets/characters/little-soul-mob.webp`
- 輪廻の塔・ピン抜き落石: `assets/hazards/tower-rune-boulder.webp`
- 冥界の重り: `assets/props/underworld-counterweight.webp`
- 上記2点の生成元と透過PNGは各 `source/` フォルダへ保全
- 冥界鳥居: `assets/props/torii-gate-nanobanana2.webp`
- 鬼火悪霊: `assets/hazards/oni-wisp-nanobanana2.webp`
- 鳥居の額文字は画像へ固定せず、章に応じて「彼岸門」「星無門」などをゲーム側で縦書き描画する
- 各原画と透過PNGは、それぞれの `source/` フォルダへ保全

### モブ・チェックポイント追加セット

- 状態: 2026-08-01 原画受領・背景除去・透過WebP化・ゲームへ組み込み済み
- 赤提灯: `assets/props/paper-lantern-mob.webp`（黄昏の墓場／星のない冥界のチェックポイント、万神冥界市の環境演出）
- 石灯籠: `assets/props/stone-lantern-mob.webp`（黄昏の墓場／星のない冥界のチェックポイント）
- 小さい紫の魂: `assets/characters/little-soul-mob.webp`（Stage 1・4の救出対象、隊列の仲間、万神冥界市の友好的な住人）
- TERU提供原画、Codex補正版原画、透過PNGは `assets/props/source/`、`assets/characters/source/`、旧分類の `assets/hazards/source/` に保全
- 味方素材には敵の当たり判定を付けない。敵密度はStage 1を7体、Stage 4を8体へ調整し、提灯点灯数とステージクリア条件は維持する

### 7. 冥界市の案内役（任意の追加演出）

- 冥府の舟番
- 天秤係
- 太鼓係
- 通行印係
- 神話上の固有神を直接再現せず、帽子・仮面・道具で文化圏を連想させる架空NPC

## 優先度 C

### 8. 魂の生前アクセサリー

- 花冠、ターバン風布、月桂冠、猫耳、鳥羽、眼鏡、武士の髷、旅人帽、首飾りなど12種以上
- 一体につき特徴は一箇所だけ。小さく表示しても判別できる形

### 9. 背景小物

- 彼岸花、骨の風車、魂の屋台、六文銭の看板、蓮の舟、逆さ砂時計、空を泳ぐ魚、提灯クラゲ
- 世界観を壊さない程度に、見つけると少し笑える小ネタを混ぜる

## 共通納品条件

- キャラクターと道具: 透過PNG
- 背景: 縦長、文字なし、中央の操作領域を確保
- 市松模様や白背景を画像へ焼き込まない
- 元画像は高解像度のまま保管し、ゲーム側で軽量WebPを作る
- 宗教画の厳密な再現より、SOUL PARADE独自の架空冥界として統一する
