# SOUL PARADE

`JATA KILLER BEES`の公式B面として企画された、独立タイトルの縦画面ブラウザゲームです。

## Local play

`index.html`をブラウザで開くか、このディレクトリを静的HTTPサーバーで配信します。

- iMac: `index.html`を直接開いて試遊できます。
- スマホ実機: Tailscale接続後に `http://100.82.86.8:4173/` を開きます。
- スマホ試遊中は、iMac側で `python3 -m http.server 4173 --bind 0.0.0.0` を起動しておきます。

## Source policy

- `JATA KILLER BEES`本体は変更しません。
- 旧CROWD RUSH神話版は参照元として残し、このフォルダから上書きしません。
- `docs/SOUL_PARADE_PLAN_V1.md`を本作の企画・実装基準とします。
- `docs/PROTOTYPE_V2_SPEC.md`は、TERU提供の企画書とプロトタイプv2の保全メモです。
- `docs/ASSET_WISHLIST.md`に、今後差し替えたい手描き素材を優先度順で記録します。
- 本番公開は、独立GitHubリポジトリと独立Vercelプロジェクトを用意してから行います。

## Controls

- 画面をなぞる: 移動
- 隊列ボタンをタップ: 縦一列／円陣／散開
- 試練画面をタップ: 数字・閂・天秤・太鼓・通行印・審判を操作
