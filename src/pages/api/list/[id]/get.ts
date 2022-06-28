import {NextApiRequest, NextApiResponse} from "next";
import {getToken} from "next-auth/jwt";
import {Project} from "../../../../../models/db/projectModel";
import {List} from "../../../../../models/db/listModel";
import {Card} from "../../../../../models/db/cardModel";


export default async function handler(req: NextApiRequest, res: NextApiResponse ) {
    const secret = process.env.SECRET

    const token = await getToken({req, secret})

    const { id } = req.query

    if (token) {
        if (req.method === 'GET') {
            //@ts-ignore
            let lists = await List
                .find({ owner: { $in: id } })
                .populate({ path: 'cards', model: Card})
                .exec();

            //
            const project = await Project.findById(id);

            let responseObject = project!.lists.map((listId) => {
                //@ts-ignore
                return lists.filter((listObject) => listObject._id.toString() === listId.toString())[0];
            });

            // return res.send(lists)
            return res.send(responseObject)
        }

        return

    } else {
        return res
            .status(401)
            .send({ message: "You can't get access to this API because you're not authenticated" })
    }
}