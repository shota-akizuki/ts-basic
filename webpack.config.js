//requireググる

const path = require("path");

module.exports = {
  //バンドルする時のエントリーポイントを設定する。
  entry: {
    bundle: "./src/index.ts",
  },
  //どこに出力するのか
  output: {
    //distをパスに設定してディレクトリ名とジョインする
    path: path.join(__dirname, "dist"),
    //ビルド時にbundle.jsができる
    filename: "[name].js",
  },
  resolve: {
    //インポート文で拡張子を書かなくて良くなる
    extensions: [".ts", ",js"],
  },
  devServer: {
    //開発用ローカルサーバの設定
    contentBase: path.join(__dirname, "dist"),
    //trueにすると勝手にブラウザが立ち上がるよ
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
};
