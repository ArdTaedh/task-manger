import { compare } from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../models/db/UserModel";
import dbConnect from "../../../utils/db";
import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';

const KEY = process.env.SECRET;

const isUserExists = async (email: string) => {
    await dbConnect()

    const user = await User.findOne({ email: email })

    if (user) {
        return user;
    }

    return null;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = req.body

        const userDetail = await isUserExists(email)

        if (userDetail) {
            return new Promise((resolve, reject) => {
                compare(password, userDetail.password, function (err, isMatched) {
                    if (err) {
                        return reject(isMatched)
                    }
                    if (isMatched === true) {
                        const claim = { id: userDetail._id, email: userDetail.email };
                        const token = sign({ user: claim }, KEY as string, { expiresIn: '1h' });

                        res.setHeader(
                            'Set-Cookie',
                            serialize('token', token, {
                                httpOnly: true,
                                maxAge: 60 * 60 * 24 * 1000,
                                sameSite: 'strict',
                                path: '/'
                            })
                        );

                        return resolve(res.send({ message: 'success', token, id: userDetail._id, status: 200 }))

                    } else {
                        res.status(404).send({ message: 'Invalid username or password' });
                    }
                })
            })

        } else {
            return res.status(404).send({ message: 'Invalid username or password' });
        }
    } else {
        return null
    }
}