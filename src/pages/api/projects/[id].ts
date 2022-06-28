import {getToken} from "next-auth/jwt";
import dbConnect from "../../../../utils/db";
import {User} from "../../../../models/db/UserModel";
import {NextApiRequest, NextApiResponse} from "next";
import {Project} from "../../../../models/db/projectModel";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const secret = process.env.SECRET

    const token = await getToken({ req, secret })

    if (token) {

        if (req.method === 'GET') {
            try {
                await dbConnect()

                const { id } = req.query

                const project = await Project.findById(id)

                if (!project) {
                    res.status(404).send('Project not found')
                }

                return res.send(project)

            } catch (e) {
                res.send(e)
            }
        }



    } else {
        res.status(401)
    }
}