import { Router, Request, Response } from 'express'
import cipher from "../libs/cipher"
import Account, { IAccount } from "./models/Account"

const router: Router = Router()

router.post('/account/sign_in', async (req: Request, res: Response) => {
    const username: string = req.body.username
    const password: string = req.body.password

    if (typeof username !== 'string' || typeof password !== 'string') {
        res.send({ ok: false })
        return
    }

    const encryptedPass: string = cipher.encrypt(password)

    const user: IAccount | null = await Account.findOne({
        username: username,
        password: encryptedPass
    }, (err: Error) => {
        if (err) {
            console.log(err)
        }
    })

    if (!user) {
        res.send({ ok: false })
        return
    }

    if (req.session) {
        req.session.authenticated = true
    }

    res.send({ ok: true })
})

export default router