import { getToken } from 'next-auth/jwt'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import { Project } from '../../../../models/db/projectModel'
import { User } from '../../../../models/db/UserModel'
import dbConnect from '../../../../utils/db'
import { ProjectWrapper } from '../../../components/pages/Projects/ProjectWrapper'
import { HomeLayout } from '../../../layouts/HomeLayout/HomeLayout'
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