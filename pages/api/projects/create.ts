import { NextApiRequest, NextApiResponse } from "next"
import { User } from "../../../models/db/UserModel"
import UserDto from "../../../models/dtos/user-dto"
import dbConnect from "../../../utils/db"

export default async function handler(req: NextApiRequest, res: NextApiResponse) { 
    const { id } = req.query

    await dbConnect()

    switch (req.method) {
        case 'GET': {
            const user = await User.findById(id)

            if (!user)
                res.status(404).send({ message: 'User Not Found' })

            console.log(user.projects)

            // const userDto = new UserDto(user)
            // return res.send(userDto)
            return user.projects
        }

        default:
            res.status(400).send({ message: 'DB error' })
    }
}