import express from "express"
import next from "next"

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
    .prepare()
    .then(() => {
        const server = express()

        server.get("/fetch-test", (_, res) => {
            return res.send({ status: "OK" })
        })

        server.post("/fetch-test", (_, res) => {
            return res.send({ status: "OK" })
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3001, err => {
            if (err) throw err
            console.log('> Ready on http://localhost:3001')
        })
    })

