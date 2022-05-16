import React, { FC } from 'react'
import { ProjectsExists } from './ProjectsExists/ProjectsExists'
import { ProjectsNotExists } from './ProjectsNotExists/ProjectsNotExists'

type ProjectWrapperTypes = {
}

export const ProjectWrapper: FC <ProjectWrapperTypes> = ({  }) => {

   

    return (
        <>
            {/* { 
               userData?.projects.length === 0
               ? <ProjectsNotExists userId={userData?._id} />
               : <ProjectsExists userId={userData?._id} />
            } */}
            Project Wrapper
        </>
    )
}
