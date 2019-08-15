import { Router, Request, Response } from 'express'
import cipher from "../libs/cipher"
import Account, { IAccount } from "./models/Account"

const router: Router = Router()

router.post('/account/sign_in', async (req: Request, res: Response) => {
    const username = req.body.username
    const password = req.body.password

    /**
     * TODO:
     * 4. session
     */
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

    res.send({ ok: true })
})

export default router