import {createSlice, Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import { removeListTypes } from "./removeListTypes";

const initialState : removeListTypes = {
    loading: 'idle',
    isSucess: false,
    isError: false,
    error: null
}

export const removeListSlice = createSlice({
    name: 'removeList',
    initialState,
    reducers: {
        Request: (state) => {
            state.loading = 'loading'
        },
        Success: (state) => {
            state.loading = 'idle'
            state.isSucess = true
            state.isError = false
            state.error = null
        },
        Fail: (state, action) => {
            state.loading = 'idle'
            state.isSucess = false
            state.isError = true
            state.error = action.payload
        },
        RemoveReset: (state) => {
            state.isError = false
            state.error = null
            state.isSucess = false
            state.loading = 'idle'
        }
    }
})

export const { Request, Success, Fail, RemoveReset } = removeListSlice.actions

export const removeListAction = (projectId: string, listId: string) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(Request)
            const response = await axios.post(`/api/list/${listId}/remove`, {
                projectId: projectId
            });

            dispatch(Success())
        } catch (e) {
            dispatch(Fail(e.response.data.message))
        }

    }
}