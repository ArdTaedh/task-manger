import React from 'react';
import dynamic from 'next/dynamic'
import {useAppSelector} from "../../../store/store";
import ListView from "./ListView/ListView";
import BoardView from "./BoardView/BoardView";

const CurrentProjectTasks = () => {
    // const { viewType } = useAppSelector(state => state.tasksViewType)

    return (
        <>
            {/* {viewType === 0 && <ListView />}
            {viewType === 1 && <BoardView />} */}
        </>
    );
};

export default CurrentProjectTasks;