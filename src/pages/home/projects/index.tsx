import { getToken } from 'next-auth/jwt'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import { Project } from '../../../../models/db/projectModel'
import { User } from '../../../../models/db/UserModel'
import dbConnect from '../../../../utils/db'
import { ProjectWrapper } from '../../../components/PageComponents/ProjectsPage/ProjectWrapper'
import { HomeLayout } from '../../../layouts/HomeLayout/HomeLayout'
import { Fetch } from '../../../store/slices/projects/fetchProjectSlice/fetchProjectSlice'
import { wrapper } from '../../../store/store'
const secret = process.env.SECRET

const ProjectPage = () => {

    return (
        <div>
            <Head>
                <title>Projects</title>
            </Head>
            <ProjectWrapper />
        </div>
    )
}

export default ProjectPage

ProjectPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <HomeLayout>
            {page}
        </HomeLayout>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    const { req } = ctx

    await dbConnect()

    const token = await getToken({ req, secret })
    const user = await User.findById(token!.uid)

    if (!token || !user) {
        return {
            redirect: {
                destination: '/',
                permanent: 'false'
            }
        }
    }

    const projectsIds = user.projects

    const projects = await Project.find({ _id: { $in: projectsIds } })

    store.dispatch(Fetch(JSON.stringify(projects)))

    return {
        props: {}
    }
})