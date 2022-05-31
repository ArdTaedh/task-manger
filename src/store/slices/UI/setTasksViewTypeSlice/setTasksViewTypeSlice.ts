import {createSlice} from "@reduxjs/toolkit";
import {loadState} from "../../../../../utils/browseLocalStorage";

type setViewTypes = {
    viewType: number | null
}

const initialState : setViewTypes = {
    viewType: loadState()
}

export const setTasksViewTypeSlice = createSlice({
    name: 'detailProject',
    initialState,
    reducers: {
        getType: (state) => {
            state.viewType = Number(localStorage.getItem('view'))
        },
        setType: (state, action) => {
            state.viewType = action.payload
        },
    }
})

export const { getType, setType } = setTasksViewTypeSlice.actions