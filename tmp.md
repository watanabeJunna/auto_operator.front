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

### テンポラリ

node node_modules/ts-node/dist/index.js insert.ts // tsconfig.json module: commonjsにすること

```ts
import { MongoError } from "mongodb"
import mongoose from "mongoose"
import Account, { IAccount } from "./server/models/Account"

mongoose.connect('mongodb://localhost:27017/auto_operator', {
    useNewUrlParser: true
}, (err: MongoError) => {
    if (err) throw err
})

// new Account(<IAccount>{
//     username: "watanabeJunna",
//     password: ""
// }).save()

// Account.deleteOne(<IAccount>{
//     username: "watanabeJunna"
// }, (err: any) => {
//     if (err) throw err
//     mongoose.disconnect()
//     console.log("success")
// })

console.log('start')

Account.find(<IAccount | {}>{}, (err: Error, res: any) => {
    if (err) throw err
    console.log(res)
})
```