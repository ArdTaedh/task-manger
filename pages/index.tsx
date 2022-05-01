import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../src/components/Header/Index/IndexHeader';

const Home: NextPage = () => {
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