import { NextApiRequest, NextApiResponse } from "next"
import { User } from "../../../../models/db/UserModel"
import dbConnect from "../../../../utils/db"
import { v4 as uuid } from 'uuid';


export default async function handler(req: NextApiRequest, res: NextApiResponse) { 
    const { userId, name } = req.body

    await dbConnect()

    switch (req.method) {
        case 'POST': {
            const user = await User.findById(userId)

            if (!user) {
                res.status(404).send({ message: 'User Not Found' })
            }

            const project = { id: uuid(), name: name }
            //@ts-ignore
            user.projects.push(project)
            //@ts-ignore
            user.save()
          
            return res.send({ message: 'Project Created Successfully' })
        }

        default:
            res.status(400).send({ message: 'DB error' })
    }
}