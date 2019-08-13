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

        server.post('/account/sign_in', (_req: Request, res: Response): void => {
            /**
             * TODO:
             * 1. body check
             * 2. create db function
             * 3. select sql
             * 4. craete session db
             * 5. make response interface
             */

            interface LoginAuthResponse {
                ok: boolean
            }

            const response: LoginAuthResponse = {
                ok: false
            }

            res.send(response)
        })

        server.get('*', (req: Request, res: Response): Promise<void> => {
            return handle(req, res)
        })

        server.listen(3000, (err: Error): void => {
            if (err) {
                throw err
            }
        })
    })