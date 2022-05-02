import { NextApiRequest, NextApiResponse } from "next"
import { User } from "../../../models/db/UserModel"
import dbConnect from "../../../utils/db"
import UserDto from '../../../models/dtos/user-dto'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query



    // switch (req.method) {
    //     case 'GET': {
    //         const user = await User.findById(id)

    //         if (!user)
    //             res.status(404).send({ message: 'User Not Found' })

    //         const userDto = new UserDto(user)
    //         return res.send(userDto)
    //     }

    //     default:
    //         res.status(400).send({ message: 'DB error' })
    // }

    if (req.method === 'GET') {
        await dbConnect()

        const user = await User.findById(id)

        if (!user)
            res.status(404).send({ message: 'User Not Found' })

        const userDto = new UserDto(user)

        return res.send(userDto)
    } else {
        return null
    }
}