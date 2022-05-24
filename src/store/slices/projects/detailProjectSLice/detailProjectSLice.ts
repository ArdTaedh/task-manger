import {createSlice, Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {DetailProjectTypes} from "./detailProjectTypes";

const initialState : DetailProjectTypes = {
    loading: 'idle',
    project: null,
    isError: false,
    error: null
}

export const detailProjectSlice = createSlice({
    name: 'detailProject',
    initialState,
    reducers: {
        Request: (state) => {
            state.loading = 'loading'
        },
        Success: (state, action) => {
            state.loading = 'idle'
            state.project = action.payload
            state.isError = false
            state.error = null
        },
        Fail: (state, action) => {
            state.loading = 'idle'
            state.project = null
            state.isError = true
            state.error = action.payload
        },
        Reset: (state) => {
            state.isError = false
            state.error = null
            state.project = null
            state.loading = 'idle'
        }
    }
})

export const { Request, Success, Fail, Reset } = detailProjectSlice.actions

export const projectDetailAction = (
    projectId: string | undefined,
) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(Request)
            const response = await axios.get(`/api/projects/${projectId!}`);

            const data = await response.data;

            dispatch(Success(data))
        } catch (e) {
            dispatch(Fail(e.response.data.message))
        }

    }
}