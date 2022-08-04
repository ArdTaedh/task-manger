import { NextApiRequest, NextApiResponse } from "next"
import { getToken } from "next-auth/jwt"
import { Card } from "../../../../../models/db/cardModel"
import { List } from "../../../../../models/db/listModel"

export default async function handler(req: NextApiRequest, res: NextApiResponse ) {
    const secret = process.env.SECRET

    const token = await getToken({req, secret})
    
    const { id } = req.query

    const { listId } = req.body

    if (token) {
        if (req.method === 'POST') {
            const list = await List.findById(listId)
            // const project = await Project.findById(projectId)

            await Card.findByIdAndDelete(id)

            list!.cards = list!.cards.filter((tempCard) => tempCard.toString() !== id);
		    await list!.save();

            return res.send({ message: "Card Deleted Successfully" })
        }

        return

    } else {
        return res
            .status(401)
            .send({ message: "You can't get access to this API because you're not authenticated" })
    }
}