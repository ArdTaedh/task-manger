import { Button, Typography } from '@mui/material'
import React, { FC, useRef } from 'react'
import { ProjectCreateModal } from './ProjectCreateModal/ProjectCreateModal'

type ProjectNotExistsTypes = {
    userId: string
}

export const ProjectsNotExists: FC <ProjectNotExistsTypes> = ({ userId }) => {
    const [open, setOpen] = React.useState(false);
    

    const toggleModalHandler = () => {
        setOpen(!open);
      };

  

    return (
        <div>
            <Typography
                variant='h6'
            >
                You don't have any projects
            </Typography>
            <Button
                variant='contained'
                onClick={toggleModalHandler}
            >
                Create Project
            </Button>
            <ProjectCreateModal 
                open={open}
                onClose={toggleModalHandler}
                userId={userId}
            />
        </div>
    )
}
