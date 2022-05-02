import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import useUrlQuery from '../../../../hooks/useUrlQuery'
import { ProjectWrapper } from '../../../../src/components/ProjectsPage/ProjectWrapper'
import { HomeLayout } from '../../../../src/layouts/HomeLayout/HomeLayout'
import { useFetchUser } from '../../../../src/store/User/useFetchUser'

const ProjectPage = () => {
    // const router = useRouter()
    // const { id } = router.query

    const { url } = useUrlQuery()

    // console.log(url)

    const { data, error } = useFetchUser(url)

    return (
        <div>
            <Head>
                <title>Projects</title>
            </Head>
            <ProjectWrapper 
                data={data!}
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