import { NextApiRequest, NextApiResponse } from 'next'

export default (_req: NextApiRequest, res: NextApiResponse) => {
    res.send({ message: 'Hello' })
}