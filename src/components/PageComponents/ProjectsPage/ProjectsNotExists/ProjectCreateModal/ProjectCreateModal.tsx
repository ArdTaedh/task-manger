import { Box, Button, Dialog, DialogTitle, FormControl, TextField } from '@mui/material'
import { padding } from '@mui/system'
import React, {ChangeEvent, FC, FormEvent, useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from "../../../../../store/store";
import {createProjectAction, Reset} from "../../../../../store/slices/projects/createProjectSlice/createProjectSlice";


type ProjectCreateModalTypes = {
    open: boolean,
    onClose: () => void,
    handleClose: () => void
}

export const ProjectCreateModal: FC <ProjectCreateModalTypes> = ({ open, onClose, handleClose }) => {
    const [projectName, setProjectName] = useState('')

    const setProjectNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setProjectName(e.target.value)
    }

    const { userInfo } = useAppSelector(state => state.userFetch)
    const userData = userInfo as any

    const { isSuccess } = useAppSelector(state => state.projectCreate)
    const { isSuccess: userFetchSuccess } = useAppSelector(state => state.userFetch)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (isSuccess && userFetchSuccess) {
            dispatch(Reset())
        }
    })

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        dispatch(createProjectAction(userData.id, projectName))
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
                    // onClick={handleClose}
                >
                    Create
                </Button>
            </Box>
        </Dialog>
    )
}
