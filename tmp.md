### やること

- webのMongoDB対応
- DBコンテナ対応
- Docker対応
- selanium導入
- UIコピー
- 本番、開発環境起動シェルの作成


### 課題

- server/index.tsが@types/index.d.ts読まない
- Docker化を進めるべし
- session、cookie化を進めるべし
- mongodb、dataVolumeをホストと共有するのはWindowsと相性が悪い、
    認証をつける場合は、entry-point.dが必要になり、ホストと共有しなければならない
    なので認証は諦める
- 9.4からapiが公開された、これでAPI

node node_modules/ts-node/dist/index.js insert.ts // tsconfig.json module: commonjsにすること