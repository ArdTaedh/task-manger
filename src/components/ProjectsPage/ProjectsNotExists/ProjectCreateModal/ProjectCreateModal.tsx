import { Box, Button, Dialog, DialogTitle, FormControl, TextField } from '@mui/material'
import { padding } from '@mui/system'
import React, { ChangeEvent, FC, FormEvent, useState } from 'react'

type ProjectCreateModalTypes = {
    open: boolean,
    onClose: () => void
    userId: string
}

export const ProjectCreateModal: FC <ProjectCreateModalTypes> = ({ open, onClose, userId }) => {

    const [projectName, setProjectName] = useState('')
    console.log(userId)

    const data = {
        userId: userId,
        projectName: projectName
    }

    // const { error, isLoading, mutate } = useCreateProject(userId, projectName)
    
    

    const setProjectNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setProjectName(e.target.value)
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

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
                onSubmit={submitHandler}
            >
                <FormControl>
                    <TextField
                        required
                        id="outlined-required"
                        label="Project Name"
                        onChange={setProjectNameHandler}
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
