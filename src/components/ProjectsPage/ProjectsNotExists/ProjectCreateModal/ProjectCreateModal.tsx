import { Box, Button, Dialog, DialogTitle, FormControl, TextField } from '@mui/material'
import { padding } from '@mui/system'
import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useCreateProject } from '../../../../store/Projects/useCreateProject'

type ProjectCreateModalTypes = {
    open: boolean,
    onClose: () => void
    userId: string
}

export const ProjectCreateModal: FC <ProjectCreateModalTypes> = ({ open, onClose, userId }) => {

    const { error, isLoading, mutate } = useCreateProject()
    
    const [projectName, setProjectName] = useState('')

    const setProjectNameHandler = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault()

        setProjectName(e.currentTarget.value)
    }

    const submitHandler = () => {
        const data = {
            userId: userId,
            projectName: projectName
        }

        mutate(data)
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth={true}
            maxWidth='xs'
        >
            <DialogTitle>Create Project</DialogTitle>
            <Box
                component='form'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '1rem',
                    gap: '1rem'
                }}
            >
                <FormControl>
                    <TextField
                        required
                        id="outlined-required"
                        label="Project Name"
                        onChange={(e) => setProjectNameHandler(e)}
                        value={projectName}
                    />
                </FormControl>
                <Button
                    variant='contained'
                    type='submit'
                >
                    Create
                </Button>
            </Box>
        </Dialog>
    )
}
