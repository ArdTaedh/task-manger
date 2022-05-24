import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header/Index/IndexHeader';
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

const Home: NextPage = () => {
    const router = useRouter()

    const session = useSession()

    if (session.status === "authenticated") {
        router.push("/home")
    }

    return (
        <div>
            <Head>
                <title>Task Manager</title>
            </Head>
            <Header />
        </div>
    );
};

export default Home;