import dbConnect from "../../../../utils/db";
import {User} from "../../../../models/db/UserModel";
import {NextApiRequest, NextApiResponse} from "next";
import {Project} from "../../../../models/db/projectModel";
import {getToken} from "next-auth/jwt";
import {List} from "../../../../models/db/listModel";
import { Card } from "../../../../models/db/cardModel";

export default async function handler(req: NextApiRequest, res: NextApiResponse ) {
    const secret = process.env.SECRET

    const token = await getToken({req, secret})

    const { title, description, date, listId } = req.body

    if (token) {
        if (req.method === 'POST') {
            const list = await List.findById(listId)
            // const project = await Project.findById(projectId)

            const card = await new Card({ 
                title: title,
                description: description, 
                date: {
                    startDate: date
                }, 
                owner: listId 
            })

            await card.save()

            list!.cards.push(card._id);
		    await list!.save();

            await List.findById(listId).populate({ path: 'cards' }).exec();

            return res.send({ message: "Card Created Successfully" })
        }

        return

    } else {
        return res
            .status(401)
            .send({ message: "You can't get access to this API because you're not authenticated" })
    }
}