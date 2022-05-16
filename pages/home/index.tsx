import Head from 'next/head'
import { ReactElement } from 'react'
import { HomeLayout } from '../../src/layouts/HomeLayout/HomeLayout'


const Home = () => {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            Home
        </div>
    )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <HomeLayout>
            {page}
        </HomeLayout>
    )
}
