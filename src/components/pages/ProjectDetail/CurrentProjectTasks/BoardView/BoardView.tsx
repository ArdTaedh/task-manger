import React, { useEffect } from 'react';
import AddList from "./components/AddList/AddList";
import { useAppDispatch, useAppSelector } from "../../../../../store/store";
import { fetchListAction } from "../../../../../store/slices/list/fetchListSlice/fetchListSlice";
import { Box } from '@mui/system';
import ListItem from './components/ListItem/ListItem';
import { Reset } from '../../../../../store/slices/list/createListSlice/createListSlice';
import { RemoveReset } from '../../../../../store/slices/list/removeListSlice/removeListSlice';
import { CreateCardReset } from '../../../../../store/slices/card/createCardSlice/createCardSlice';
import { RemoveCardReset } from '../../../../../store/slices/card/removeCardSlice/removeCardSlice';

const BoardView = () => {
    const dispatch = useAppDispatch()
    const { isLoading, isError, error, lists } = useAppSelector(state => state.listFetch)
    const { isSuccess: listCreateSuccess } = useAppSelector(state => state.listCreate)

    const { project } = useAppSelector(state => state.projectDetail)
    const projectDetailData = project as any

    const { isSucess: removeListSuccess } = useAppSelector(state => state.listRemove)

    const { isSuccess: createCardSuccess } = useAppSelector(state => state.cardCreate)

    const { isSuccess: removeCardSuccess } = useAppSelector(state => state.cardRemove)

    useEffect(() => {
        if (projectDetailData !== null && !lists || listCreateSuccess || removeListSuccess || createCardSuccess || removeCardSuccess) {
            dispatch(fetchListAction(projectDetailData!._id))
        }

        return () => {
            return
        }
    }, [projectDetailData, dispatch, listCreateSuccess, removeListSuccess, createCardSuccess, removeCardSuccess])

    useEffect(() => {
        if (listCreateSuccess) {
            dispatch(Reset())
        }

        if (removeListSuccess) {
            dispatch(RemoveReset())
        }

        if (createCardSuccess) {
            dispatch(CreateCardReset())
        }

        if (removeCardSuccess) {
            dispatch(RemoveCardReset())
        }

        return () => {
            return
        }
    }, [dispatch, listCreateSuccess, removeListSuccess, createCardSuccess, removeCardSuccess])

    return (
        <Box
            component="div"
            sx={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: "2rem",
                overflow: "auto",
                scroll: "hidden",
                minHeight: "10rem",
                width: "auto"
            }}
        >
            {
                lists?.length !== 0
                    ? (
                        //@ts-ignore
                        lists?.map(el => (
                            //@ts-ignore
                            <ListItem key={el._id} item={el} />
                        ))
                    )
                    : ""
            }
            <AddList />
        </Box>
    );
};

export default BoardView;