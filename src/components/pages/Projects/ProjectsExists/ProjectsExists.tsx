import React, { FC } from 'react'
import {useAppSelector} from "../../../../store/store";
import {Card, CardContent, Typography} from "@mui/material";
import Link from "../../../../../utils/mui/Link";


interface projectData {
    _id: string,
    name: string
}

export const ProjectsExists: FC = () => {
    const { projects } = useAppSelector(state => state.projectsFetch)
    const data = projects as any

    const mappedData = data?.projects!.map((project: projectData) => (
        <Link
            key={project._id}
            href={`projects/${project._id}`}
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
