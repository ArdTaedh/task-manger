import dbConnect from "../../../../utils/db";
import {User} from "../../../../models/db/UserModel";
import {NextApiRequest, NextApiResponse} from "next";
import {Project} from "../../../../models/db/projectModel";
import {getToken} from "next-auth/jwt";
import {List} from "../../../../models/db/listModel";

export default async function handler(req: NextApiRequest, res: NextApiResponse ) {
    const secret = process.env.SECRET

    const token = await getToken({req, secret})

    const { title, projectId } = req.body

    if (token) {
        if (req.method === 'POST') {
            //@ts-ignore
            const tempList = await List({ title: title, owner: projectId })

            const newList = await tempList.save()

            const ownerBoard = await Project.findById(projectId)

            ownerBoard!.lists.push(newList.id)

            ownerBoard!.save()

            return res.send(newList)
        }

        return

    } else {
        return res
            .status(401)
            .send({ message: "You can't get access to this API because you're not authenticated" })
    }
}