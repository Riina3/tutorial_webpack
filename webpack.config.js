// コマンドでwebpack 編集ファイル　吐き出しファイル　モジュール
// でビルド実行していたものをこの設定ファイルを作ることでwebpackだけで実行できるようになる
module.exports = {
    entry  : "./entry.js",
    output : {
        path : __dirname,
        filename : "bundle.js"
    },
    module : {
        loaders : [
            { test : /\.css$/, loader : "style!css" }
        ]
    }
};