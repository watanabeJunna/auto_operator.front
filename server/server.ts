import next from "next"
import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import { MongoError } from "mongodb"

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const db: string = 'mongodb://db:27017/auto_operator'

    const connectionOption: object = { useNewUrlParser: true }

    const callback: (err: MongoError) => void = (err: MongoError) => {
        if (err) {
            throw err
        }
    }

    mongoose.connect(db, connectionOption, callback)

    const server = express()

    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(bodyParser.json())

    server.get('*', (req: Request, res: Response): Promise<void> => {
        return handle(req, res)
    })

    server.listen(3000, (err: Error): void => {
        if (err) {
            throw err
        }
    })
})