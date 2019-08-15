import crypto from "crypto"

/**
 * Cryptographic processing class.
 * 
 * @see https://fisproject.jp/2015/01/crypto-js-pycrypto-compatible/
 * @see https://gist.github.com/marcoslin/8026990
 * @see https://qiita.com/hm0429/items/2acee723170b32b91304
 */
namespace Cipher {
    const key: string = process.env.AES_KEY as string

    const iv: string = process.env.AES_IV as string

    const algorithm: string = 'aes-256-cbc'

    export const encrypt = (text: string): string => {
        const cipher = crypto.createCipheriv(algorithm, key, iv)

        let crypted = cipher.update(text)

        return Buffer.concat([crypted, cipher.final()]).toString('base64')
    }

    export const decrypt = (crypted: string): string => {
        const decipher = crypto.createDecipheriv(algorithm, key, iv)

        let decrypted = decipher.update(Buffer.from(crypted, 'base64'))

        return Buffer.concat([decrypted, decipher.final()]).toString('utf-8')
    }
}

export default Cipher