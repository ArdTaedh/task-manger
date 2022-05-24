import {getToken} from "next-auth/jwt";
import dbConnect from "../../../../utils/db";
import {User} from "../../../../models/db/UserModel";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const secret = process.env.SECRET

    const token = await getToken({ req, secret })

    if (token) {

        if (req.method === 'GET') {
            try {
                await dbConnect()

                const { id } = req.query

                const user = await User.findById(token.uid)

                if (!user) {
                    res.status(404).send('User not found')
                }

                //@ts-ignore
                return user.projects.find(project =>
                    project.id === id
                        ? res.send(project)
                        : res.status(404).send({ message: 'Project not Found' })
                )

            } catch (e) {
                res.send(e)
            }
        }



    } else {
        res.status(401)
    }
}