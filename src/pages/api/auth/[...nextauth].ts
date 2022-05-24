import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from '../../../../utils/auth';
import dbConnect from "../../../../utils/db";
import {User} from "../../../../models/db/UserModel";

interface credentialsData {
    email: string;
    password: string;
}

export default NextAuth({
    providers: [
        CredentialsProvider({
            //@ts-ignore
            async authorize (credentials: credentialsData )  {
                await dbConnect();

                const user = await User.findOne({ email: credentials.email })

                if (!user) {
                    throw new Error('Email or Password are incorrect!');
                }

                const isValid = await verifyPassword(
                    credentials!.password,
                    user.password
                );

                if (!isValid) {
                    throw new Error('Email or Password are incorrect!');
                }

                // return {
                //     name: user.username,
                //     email: user.email,
                //     id: user.id,
                //     image: user.avatar,
                //     projects: user.projects,
                //     processingTasks: user.processingTasks,
                //     completedTasks: user.completedTasks
                // }
                return user
            }
        })
    ],
    callbacks: {
        async session({session, token, user}) {
            // session.accessToken  = token.accessToken;
            // return session;
            if(session?.user) {
                // session.user.name = token.name
                session.user.id = token.uid
                // session.user.image = token.image
                // session.user.projects = token.projects
                // session.user.processingTasks = token.processingTasks
                // session.user.completedTasks = token.completedTasks
            }

            return session;
        },
        //@ts-ignore
        async jwt({token, account, user}) {
            // if (account) {
            //     token.accessToken = account.access_token
            //     return auth
            // }
            if (user) {
                token.uid = user.id
            }
            return token
        },
    },
    secret: process.env.SECRET,
    jwt: {
        secret: process.env.SECRET,
        maxAge: 20
    },
    session: {
        strategy: "jwt"
    },
})