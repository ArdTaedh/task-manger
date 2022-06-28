import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Box, Button, Card, CardContent, IconButton, TextField} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {useAppDispatch, useAppSelector} from "../../../../../../store/store";
import {createListAction} from "../../../../../../store/slices/list/createListSlice/createListSlice";

type creteListTypes = {
    setList: () => void
}

const CreateListCard = ({ setList }: creteListTypes) => {
    const [listTitle, setListTitle] = useState('')

    const dispatch = useAppDispatch()

    const { project } = useAppSelector(state => state.projectDetail)
    const projectData = project as any

    const setListTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setListTitle(e.target.value)
    }

    const submitHandler = (e: FormEvent) => {
        e.preventDefault()

        try {
            dispatch(createListAction(listTitle!, projectData._id))
            setList()
        } catch (e) {
            console.log(e)
        }
    }

    return (
            <Card
                sx={{
                    width: '15rem',
                    height: "fit-content"
                }}
            >
                <Box
                    component="form"
                    onSubmit={(e: any) => submitHandler(e)}
                >
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.8rem"
                        }}
                    >
                        <TextField
                            label="List Name"
                            variant="standard"
                            onChange={setListTitleHandler}
                            value={listTitle}
                        />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "1rem"
                            }}
                        >
                            <Button
                                type="submit"
                            >
                                Add List
                            </Button>
                            <IconButton
                                onClick={() => setList()}
                            >
                                <CloseIcon/>
                            </IconButton>
                        </Box>
                    </CardContent>
                </Box>
            </Card>
    );
};

export default CreateListCard;