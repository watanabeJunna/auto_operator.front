import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import next from "next"
import mongoose from "mongoose"
import { MongoError } from "mongodb"
import route from "./route"

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
    .prepare()
    .then(() => {
        const server = express()

        mongoose.connect('mongodb://db:27017/auto_operator', {
            useNewUrlParser: true
        }, (err: MongoError) => { if (err) throw err })

        server.use(bodyParser.urlencoded({ extended: true }))
        server.use(bodyParser.json())

        server.use('/', route)

        server.get('*', (req: Request, res: Response): Promise<void> => {
            return handle(req, res)
        })

        server.listen(3000, (err: Error): void => {
            if (err) {
                throw err
            }
        })
    })