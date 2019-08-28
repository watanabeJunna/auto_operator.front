import cipher from "../../libs/cipher"
import Account, { IAccount } from "../../server/models/Account"
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    console.log(req.method)
    if (req.method !== 'POST') {
        return
    }

    const username: string = req.body.username
    const password: string = req.body.password

    if (typeof username !== 'string' || typeof password !== 'string') {
        res.send({ ok: false })
        return
    }

    const encryptedPass: string = cipher.encrypt(password)

    console.log(username, encryptedPass)

    const user: IAccount | null = await Account.findOne({
        username: username,
        password: encryptedPass
    }, (err: Error) => {
        if (err) {
            console.log(err)
        }
    })

    console.log(user)

    if (!user) {
        res.send({ ok: false })
        return
    }

    // if (req.session) {
    //     req.session.authenticated = true
    // }

    console.log('res')
    res.send({ ok: true })
}