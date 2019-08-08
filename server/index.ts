import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import next from "next"

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
    .prepare()
    .then(() => {
        const server = express()

        server.use(bodyParser.urlencoded({ extended: true }))
        server.use(bodyParser.json())

        server.post('/account/sign_in', (req: Request, res: Response): any => {
            /**
             * TODO:
             * 1. body check
             * 2. create db function
             * 3. select sql
             * 4. craete session db
             * 5. make response interface
             */
            res.send(req.body)
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3001, err => {
            if (err) throw err
            console.log('> Ready on http://localhost:3001')
        })
    })