### やること

- webのMongoDB対応
- DBコンテナ対応
- Docker対応
- selanium導入
- UIコピー


### 課題

- server/index.tsが@types/index.d.ts読まない
- Docker化を進めるべし
- session、cookie化を進めるべし
- mongodb、dataVolumeをホストと共有するのはWindowsと相性が悪い、
    認証をつける場合は、entry-point.dが必要になり、ホストと共有しなければならない
    なので認証は諦める

```mongo.test.js
import { MongoError } from "mongodb"
import mongoose from "mongoose"
import Account, { IAccount } from "./server/models/Account";
import console = require("console");

mongoose.connect('mongodb://localhost:27017/auto_operator', {
    useNewUrlParser: true
}, (_err: MongoError) => {
    console.log(_err)
})

console.log("start")

new Account({
    name: "watanabe"
}).save()

Account.find({}, (err: Error, data: IAccount) => {
    if (err) throw err
    console.log(data)
})
```

docker run --name dev-mongo -it -d -v auto_operatorfront_db://data/db mongo

docker exec -it dev-mongo //bin/sh

node node_modules/ts-node/dist/index.js insert.ts // tsconfig.json module: commonjsにすること

docker volume ls | xargs docker volume rm

dcrm