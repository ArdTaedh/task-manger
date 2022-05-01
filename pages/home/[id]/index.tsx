import { Button } from '@mui/material'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { HomeLayout } from '../../../src/layouts/HomeLayout/HomeLayout'
import { GetStaticProps } from 'next';
import { useFetchUser } from '../../../src/store/User/useFetchUser'

const Home = () => {
    const router = useRouter()
    const { id } = router.query

    const [url, setUrl] = useState("")

    useEffect(()=>{
        router.isReady ? setUrl(id as string) : ''
    
    }, [router.isReady, id, setUrl]);


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
