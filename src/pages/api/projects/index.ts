import {NextApiRequest, NextApiResponse} from "next";
import {getToken} from "next-auth/jwt";
import dbConnect from "../../../../utils/db";
import {User} from "../../../../models/db/UserModel";
import {Project} from "../../../../models/db/projectModel";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name } = req.body

    const secret = process.env.SECRET

    const token = await getToken({ req, secret })

    //@ts-ignore
    const { uid } = token

    await dbConnect()

    switch (req.method) {
        case 'GET': {
            const user = await User.findById(uid)

            if (!user) {
                res.status(404).send({ message: 'User Not Found' })
            }

            const projectsIds = user!.projects

            const projects = await Project.find({ _id: { $in: projectsIds } })

            return res.send({ message: 'Projects Fetched Successfully', projects: projects })
        }

        default:
            res.status(400).send({ message: 'DB error' })
    }
}