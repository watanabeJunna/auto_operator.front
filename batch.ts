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

Account.find(<IAccount | {}>{}, (err: Error, res: any) => {
    if (err) throw err
    console.log(res)
})