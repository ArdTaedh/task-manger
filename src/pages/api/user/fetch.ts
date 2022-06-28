import { NextApiRequest, NextApiResponse } from "next"
import { User } from "../../../../models/db/UserModel"
import dbConnect from "../../../../utils/db"
import UserDto from '../../../../models/dtos/user-dto'
import {getToken} from "next-auth/jwt"

const secret = process.env.SECRET

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const token = await getToken({req, secret})

    if (token) {
        if (req.method === 'GET') {
        await dbConnect()

        const user = await User.findById(token.uid)

        if (!user)
            res.status(404).send({ message: 'User Not Found' })

        const userDto = new UserDto(user)

        return res.send(userDto)
        }
    } 

    return res.status(403)
}