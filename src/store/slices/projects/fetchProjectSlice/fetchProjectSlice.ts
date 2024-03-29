import {createSlice, Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import { fetchProjectTypes } from "./fetchProjectTypes";

const initialState : fetchProjectTypes = {
    loading: 'idle',
    projects: null,
    isError: false,
    error: null
}

export const fetchProjectSlice = createSlice({
    name: 'fetchProjects',
    initialState,
    reducers: {
        Request: (state) => {
            state.loading = 'loading'
        },
        Success: (state, action) => {
            state.loading = 'idle'
            state.projects = action.payload
            state.isError = false
            state.error = null
        },
        Fail: (state, action) => {
            state.loading = 'idle'
            state.projects = null
            state.isError = true
            state.error = action.payload
        },
        Reset: (state) => {
            state.isError = false
            state.error = null
            state.projects = null
            state.loading = 'idle'
        }
    }
})

export const { Request, Success, Fail, Reset } = fetchProjectSlice.actions

export const fetchProjectAction = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(Request)
            const response = await axios.get(`/api/projects`);

            const data = await response.data;

            dispatch(Success(data))
        } catch (e) {
            dispatch(Fail(e.response.data.message))
        }

    }
}