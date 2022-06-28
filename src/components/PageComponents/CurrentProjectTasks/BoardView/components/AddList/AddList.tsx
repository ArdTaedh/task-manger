import React, {useState} from 'react';
import {useAppDispatch} from "../../../../../../store/store";
import {Button} from "@mui/material";
import CreateListCard from "./CreateListCard";

const AddList = () => {
    const [creatList, setCreateList] = useState(false)
    const dispatch = useAppDispatch()

    const toggleCreateListHandler = () => {
        setCreateList(!creatList)
    }

    return (
        <>
            {
                creatList
                    ? <CreateListCard setList={toggleCreateListHandler} />
                    : (
                        <Button
                            onClick={() => toggleCreateListHandler()}
                            sx={{
                                height: "fit-content",
                                minWidth: "fit-content",
                                overflow: "hidden"
                            }}
                        >
                            Create a List
                        </Button>
                    )
            }
        </>

    );
};

export default AddList;