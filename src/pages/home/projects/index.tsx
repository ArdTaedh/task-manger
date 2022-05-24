import Head from 'next/head'
import React, { ReactElement } from 'react'
import { ProjectWrapper } from '../../../components/ProjectsPage/ProjectWrapper'
import { HomeLayout } from '../../../layouts/HomeLayout/HomeLayout'

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