import {NextApiRequest, NextApiResponse} from "next";
import {getToken} from "next-auth/jwt";
import {Project} from "../../../../../models/db/projectModel";
import {List} from "../../../../../models/db/listModel";
import {Card} from "../../../../../models/db/cardModel";


export default async function handler(req: NextApiRequest, res: NextApiResponse ) {
    const secret = process.env.SECRET

    const token = await getToken({req, secret})

    const { id } = req.query
    const { projectId } = req.body

    if (token) {
        if (req.method === 'POST') {
            const project = await Project.findById(projectId)

            const result = await List.findByIdAndDelete(id)
            
            project!.lists = project!.lists.filter((list) => list.toString() !== id)

            project?.save()

            return res.send({ message: "Success" })

            // await Card.deleteMany({ owner: listId }); видалити усі завдання зі списку
        }

        return res.status(404)
    } 

    return res
            .status(401)
            .send({ message: "You can't get access to this API because you're not authenticated" })
}