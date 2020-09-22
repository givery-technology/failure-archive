# vue-forgot-state-reset

Vue の state を v-model 経由で変更するコードを書いていたら、state のリセットを忘れてしまっていた。
そのため、過去に選択したデータの選択状態が残ってしまっていた。

参照ファイル: [App.vue](./src/App.vue)

バグの再現手順
1. [App.vue](./src/App.vue) の `this.selected = [];` を削除してサーバーを立てる
2. 組織を選択する
3. プロジェクトを選択する
4. 送信対象を選択する
    * この時「送信対象」に選択したアイテムが表示される
5. 組織 / プロジェクトを変更する
    * この時「送信対象」が初期化されていないことを確認
6. 送信対象を選択する
    * 以前選択した送信対象が残ったまま、リストに送信対象が選択されることが確認できる

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
