import { Button, Typography } from '@mui/material'
import React, { FC, useRef } from 'react'
import { ProjectCreateModal } from './ProjectCreateModal/ProjectCreateModal'
import {useAppSelector} from "../../../store/store";

type ProjectNotExistsTypes = {
}

export const ProjectsNotExists: FC <ProjectNotExistsTypes> = () => {
    const [open, setOpen] = React.useState(false);

    const { isSuccess } = useAppSelector(state => state.projectCreate)

    const toggleModalHandler = () => {
        setOpen(!open);
      };

    const handleClose = () => {
        setOpen(false);
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
                handleClose={handleClose}
            />
        </div>
    )
}
