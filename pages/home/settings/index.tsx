import Head from 'next/head'
import React, { ReactElement } from 'react'
import { HomeLayout } from '../../../src/layouts/HomeLayout/HomeLayout'

const SettingsPage = () => {
    return (
        <>
            <Head>
                <title>Settings Page</title>
            </Head>
            Dark mode
        </>
    )
}

export default SettingsPage

SettingsPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <HomeLayout>
            {page}
        </HomeLayout >
    )
}