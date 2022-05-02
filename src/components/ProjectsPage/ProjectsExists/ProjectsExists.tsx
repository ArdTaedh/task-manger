import React, { FC } from 'react'

type ProjectExistsTypes = {
    userId: string
}

export const ProjectsExists: FC <ProjectExistsTypes> = ({ userId }) => {
    return (
        <div>Projects Exists</div>
    )
}
