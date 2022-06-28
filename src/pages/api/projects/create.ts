import { NextApiRequest, NextApiResponse } from "next"
import { User } from "../../../../models/db/UserModel"
import dbConnect from "../../../../utils/db"
import {getToken} from "next-auth/jwt";
import {Project} from "../../../../models/db/projectModel";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name } = req.body

    const secret = process.env.SECRET

    const token = await getToken({ req, secret })


    await dbConnect()

    switch (req.method) {
        case 'POST': {
            const user = await User.findById(token!.uid)

            if (!user) {
                res.status(404).send({ message: 'User Not Found' })
            }

            const project = new Project({ name: name })

            await project.save()

            user!.projects.push(project.id)

            await user!.save()
          
            return res.send({ message: 'Project Created Successfully' })
        }

        default:
            res.status(400).send({ message: 'DB error' })
    }
}