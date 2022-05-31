import React, {ReactElement, useEffect} from 'react';
import {HomeLayout} from "../../../../layouts/HomeLayout/HomeLayout";
import {Box, Breadcrumbs, Container, Skeleton, Typography} from "@mui/material";
import Link from "../../../../../utils/mui/Link";
import {useAppDispatch, useAppSelector} from "../../../../store/store";
import {projectDetailAction} from "../../../../store/slices/projects/detailProjectSLice/detailProjectSLice";
import {useRouter} from "next/router";
import Head from "next/head";
import ProjectActions from "../../../../components/PageComponents/ProjectActions/ProjectActions";
import CurrentProjectTasks from "../../../../components/PageComponents/CurrentProjectTasks/CurrentProjectTasks";

const Index = () => {
    const {query, isReady} = useRouter()

    const dispatch = useAppDispatch()

    const {userInfo} = useAppSelector(state => state.userFetch)
    const userData = userInfo as any

    const {project} = useAppSelector(state => state.projectDetail)
    const projectData = project as any

    useEffect(() => {
        if (!project && isReady) {
            dispatch(projectDetailAction(String(query?.id)))
        }
    }, [project, isReady])

    return (
        <>
            <Head>
                {
                    projectData
                        ? <title>Project: {projectData.name}</title>
                        : <title>Project </title>
                }
            </Head>
            <Container
                maxWidth='xl'
            >
                <Box
                    sx={{
                        padding: '0.2rem 0 0  7px'
                    }}
                >
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/home/projects">
                            Projects
                        </Link>
                        <Typography color="text.primary">{userData ? projectData?.name :
                            <Skeleton width='auto'/>}</Typography>
                    </Breadcrumbs>
                    <ProjectActions />
                    <CurrentProjectTasks />
                </Box>
            </Container>
        </>
    );
};

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
    return (
        <HomeLayout>
            {page}
        </HomeLayout>
    )
}