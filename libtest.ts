import crypto from "crypto"

namespace Cipher {
    // node -e "console.log(crypto.randomBytes(24).toString('base64'))"
    const key: string = 'qyXvvfcK7swJcQCmaKlsv/eVLm5+netR'

    // node -e "console.log(crypto.randomBytes(10).toString('base64'))"
    const iv: string = '2edzFq2vvUpRwA=='

    const algorithm: string = 'aes-256-cbc'

    export const encrypt = (text: string): Buffer => {
        const cipher = crypto.createCipheriv(algorithm, key, iv)
        let crypted = cipher.update(text)
        return Buffer.concat([crypted, cipher.final()])
    }

    export const decrypt = (crypted: Buffer): string => {
        const decipher = crypto.createDecipheriv(algorithm, key, iv)
        let decrypted = decipher.update(crypted)
        return Buffer.concat([decrypted, decipher.final()]).toString('utf-8')
    }
}

const encrypted = Cipher.encrypt("watanabeJunna")
console.log(encrypted.toString('base64'))
console.log(Buffer.from(encrypted.toString('base64'), 'base64').toString('base64'))
console.log(Cipher.decrypt(encrypted))