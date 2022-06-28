import React, {useEffect} from 'react';
import AddList from "./components/AddList/AddList";
import {useAppDispatch, useAppSelector} from "../../../../store/store";
import {fetchListAction} from "../../../../store/slices/list/fetchListSlice/fetchListSlice";
import { Box } from '@mui/system';
import ListItem from './components/ListItem/ListItem';

const BoardView = () => {
    const dispatch = useAppDispatch()
    const { isLoading, isError, error, lists } = useAppSelector(state => state.listFetch)
    const { isSuccess } = useAppSelector(state => state.listCreate)

    
    const { project } = useAppSelector(state => state.projectDetail)
    const projectDetailData = project as any

    useEffect(() => {
        if (projectDetailData !== null && !lists || isSuccess) {
            dispatch(fetchListAction(projectDetailData!._id))
        }
    }, [projectDetailData, dispatch, isSuccess])

    return (
        <Box
            component="div"
            sx={{
                display: "flex",
                flexDirection: "row",
                gap: "2rem",
                overflowY: "auto",
                overflowX: "auto",
                scroll: "hidden",
                height: "100%"
            }}
        >
            {
                lists?.length !== 0
                    ? (
                        //@ts-ignore
                        lists?.map(el => (
                            //@ts-ignore
                            <ListItem key={el._id} item={el}  />
                        ))
                    )
                    : <p>You don't have any projects</p>
            }
            <AddList />
        </Box>
    );
};

export default BoardView;