import React, { useState } from 'react';
import { useAppDispatch } from "../../../../../../../store/store";
import { Box, Button, Collapse } from "@mui/material";
import CreateListCard from "./CreateListCard";

const AddList = () => {
    const [creatList, setCreateList] = useState(false)
    const dispatch = useAppDispatch()

    const toggleCreateListHandler = () => {
        setCreateList(!creatList)
    }

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    minWidth: "258px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start"
                }}
            >
                {
                    creatList
                        ? <CreateListCard setList={toggleCreateListHandler} />
                        : (
                            <Button
                                onClick={() => toggleCreateListHandler()}
                                sx={{
                                    height: "fit-content",
                                    minWidth: "fit-content",
                                    overflow: "hidden",
                                }}
                            >
                                Create a List
                            </Button>
                        )
                }
            </Box>
        </>

    );
};

export default AddList;