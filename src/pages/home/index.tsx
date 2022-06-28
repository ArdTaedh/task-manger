import { getToken } from 'next-auth/jwt'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import { ReactElement } from 'react'
import { User } from '../../../models/db/UserModel'
import UserDto from '../../../models/dtos/user-dto'
import dbConnect from '../../../utils/db'
import { HomeLayout } from '../../layouts/HomeLayout/HomeLayout'
import { Fetch } from '../../store/slices/user/userFetchSlice/userFetchSilce'
import { useAppSelector, wrapper } from '../../store/store'
const secret = process.env.SECRET


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

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    const { req } = ctx

    await dbConnect()

    const token = await getToken({req, secret})
    const user = await User.findById(token.uid)

    if (!token || !user) {
        return {
            redirect: {
                destination: '/',
                permanent: 'false'
            }
        }
    }

    const userDto = new UserDto(user)

    store.dispatch(Fetch(JSON.stringify(userDto)))
    
    return {
        props: {}
    }
})