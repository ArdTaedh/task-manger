import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { cookies } = req;

        const jwt = cookies.token;

        if (!jwt) {
            return res.json({ message: "Bro you are already not logged in..." });
        } else {
            //@ts-ignore
            const serialised = serialize("token", null, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                sameSite: "strict",
                maxAge: -1,
                path: "/",
            });

            res.setHeader("Set-Cookie", serialised);

            res.status(200).json({ message: "Successfuly logged out!" });
        }
    } else {
        return 
    }

}