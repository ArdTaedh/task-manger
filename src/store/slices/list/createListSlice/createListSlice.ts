import {createSlice, Dispatch} from "@reduxjs/toolkit";
import {CreateListTypes} from './createListTypes'
import axios from "axios";
import {Fail} from "../../projects/createProjectSlice/createProjectSlice";

const initialState: CreateListTypes = {
    isLoading: 'idle',
    isSuccess: false,
    isError: false,
    error: null
}

export const createListSlice = createSlice({
    name: 'listCreate',
    initialState,
    reducers: {
        Request: state => {
            state.isLoading = 'loading'
        },
        Success: state => {
            state.isLoading = 'idle'
            state.isSuccess = true
        },
        Error: (state, action) => {
            state.isLoading = 'idle'
            state.isSuccess = false
            state.isError = true
            state.error = action.payload
        },
        Reset: (state) => {
            state.isLoading = 'idle'
            state.isSuccess = false
            state.isError = false
            state.error = null
        }
    }
})

export const {Request, Success, Error, Reset} = createListSlice.actions

export const createListAction = (
    title: string | undefined,
    projectId: string | undefined,
) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(Request)
            const response = await axios.post('/api/list/create',
                {
                    title: title,
                    projectId: projectId
                }
            );

            const data = await response.data;

            dispatch(Success())
        } catch (e) {
            dispatch(Fail(e.response.data.message))
        }

    }
}