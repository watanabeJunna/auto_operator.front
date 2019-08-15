import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import session from "express-session"
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
        mongoose.connect('mongodb://db:27017/auto_operator', {
            useNewUrlParser: true
        }, (err: MongoError) => { if (err) throw err })

        const server = express()

        let sessionOption = {
            secret: process.env.SESSION_SIGNNATURE as string,
            resave: false,
            saveUninitialized: false,
            cookie: {
                secure: false,
                httpOnly: true,
            }
        }

        server.use(bodyParser.urlencoded({ extended: true }))
        server.use(bodyParser.json())

        if (server.get('env') === 'production') {
            server.set('trust proxy', 1)
            sessionOption.cookie.secure = true
        }

        server.use(session(sessionOption))

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