import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import useUrlQuery from '../../../hooks/useUrlQuery'
import { ProjectWrapper } from '../../../src/components/ProjectsPage/ProjectWrapper'
import { HomeLayout } from '../../../src/layouts/HomeLayout/HomeLayout'

const ProjectPage = () => {
    // const router = useRouter()
    // const { id } = router.query

    return (
        <div>
            <Head>
                <title>Projects</title>
            </Head>
            <ProjectWrapper 
            />
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