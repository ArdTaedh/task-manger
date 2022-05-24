import {createSlice, Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {CreateProjectTypes} from "./createProjectTypes";

const initialState : CreateProjectTypes = {
    loading: 'idle',
    isSuccess: false,
    isError: false,
    error: null
}

export const createProjectSlice = createSlice({
    name: 'createProject',
    initialState,
    reducers: {
        Request: (state) => {
            state.loading = 'loading'
        },
        Success: (state) => {
            state.loading = 'idle'
            state.isSuccess = true
            state.isError = false
            state.error = null
        },
        Fail: (state, action) => {
            state.loading = 'idle'
            state.isSuccess = false
            state.isError = true
            state.error = action.payload
        },
        Reset: (state) => {
            state.isError = false
            state.error = null
            state.isSuccess = false
            state.loading = 'idle'
        }
    }
})

export const { Request, Success, Fail, Reset } = createProjectSlice.actions

export const createProjectAction = (
    userId: string | undefined,
    name: string | undefined,
) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(Request)
            const response = await axios.post('/api/projects/create', { name, userId } );

            const data = await response.data;

            dispatch(Success())
        } catch (e) {
            dispatch(Fail(e.response.data.message))
        }

    }
}