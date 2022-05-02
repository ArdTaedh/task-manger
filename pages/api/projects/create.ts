import { NextApiRequest, NextApiResponse } from "next"
import { Project } from "../../../models/db/projectModel"
import { User } from "../../../models/db/UserModel"
import UserDto from "../../../models/dtos/user-dto"
import dbConnect from "../../../utils/db"

export default async function handler(req: NextApiRequest, res: NextApiResponse) { 
    const { id, projectName } = req.body

    await dbConnect()

    switch (req.method) {
        case 'POST': {
            const user = await User.findById(id)

            if (!user)
                res.status(404).send({ message: 'User Not Found' })

            
            try {
                user?.projects.push({ name: projectName })

                return res.send({ message: 'Project Created Successfully' })
            } catch(err) {
                return res.send(err)
            }
          

            // const userDto = new UserDto(user)
            // return res.send(userDto)
        }

        default:
            res.status(400).send({ message: 'DB error' })
    }
}