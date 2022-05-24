import React, { FC } from 'react'
import {useAppSelector} from "../../../store/store";
import {Card, CardContent, Typography} from "@mui/material";
import Link from "../../../../utils/mui/Link";

type UserData = {
    id: string,
    username: string,
    email: string,
    projects: [projectData]
}

interface projectData {
    id: string,
    name: string
}

export const ProjectsExists: FC = () => {
    const { userInfo } = useAppSelector(state => state.userFetch)
    const data = userInfo as any



    const mappedData = data?.projects!.map((project: projectData) => (
        <Link
            key={project.id}
            href={`projects/${project.id}`}
        >
            <Card>
                <CardContent>
                    <Typography
                        variant='h6'
                    >
                        {project.name}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    ))

    return (
        <>

            {mappedData}
        </>
    )
}
