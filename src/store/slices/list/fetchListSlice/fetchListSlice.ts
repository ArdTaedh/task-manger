import {createSlice, Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {FetchListTypes} from "./fetchListTypes";

const initialState: FetchListTypes = {
    isLoading: 'idle',
    lists: null,
    isError: false,
    error: null
}

export const fetchListSlice = createSlice({
    name: 'listFetch',
    initialState,
    reducers: {
        Request: state => {
            state.isLoading = 'loading'
        },
        Success: (state, action) => {
            state.isLoading = 'idle'
            state.lists = action.payload
        },
        Error: (state, action) => {
            state.isLoading = 'idle'
            state.lists = null
            state.isError = true
            state.error = action.payload
        }
    }
})

export const {Request, Success, Error} = fetchListSlice.actions

export const fetchListAction = (
    projectId: string | undefined,
) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(Request)
            const response = await axios.get(`/api/list/${projectId}/get`);

            const data = await response.data;

            dispatch(Success(data))
        } catch (e) {
            dispatch(Error(e.response.data.message))
        }
    }
}