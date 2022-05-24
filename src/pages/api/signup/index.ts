import { hash } from "bcryptjs";
import {NextApiRequest, NextApiResponse} from "next";
import { User } from "../../../../models/db/UserModel";
import dbConnect from '../../../../utils/db'

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return;
    }

    const data = req.body;

    const { username, email, password } = data;

    if (
        !username ||
        !email ||
        !email.includes('@') ||
        !password ||
        password.trim().length < 7
    ) {
        res.status(422).send({
            message:
                'Password should also be at least 7 characters long.',
        });
        return;
    }

    await dbConnect()

    const existingUser = await User.findOne({ email: email })

    if (existingUser) {
        res.status(422).send({ message: 'User is already exists!' });
        return;
    }

    const hashedPassword = await hash(password, 6);

    const user = new User({
        email: email,
        username: username,
        password: hashedPassword
    })

    await user.save()

    res.status(201).send({ message: 'Created User!' });
}

export default handler;