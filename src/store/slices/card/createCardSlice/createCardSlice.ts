import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { createCardTypes } from "./createCardTypes";

const initialState: createCardTypes = {
    isLoading: "idle",
    isSuccess: false,
    isError: false,
    error: null
}

export const createCardSlice = createSlice({
    name: 'createCard',
    initialState,
    reducers: {
        Request: (state) => {
            state.isLoading = 'loading'
        },
        Success: (state) => {
            state.isLoading = 'idle'
            state.isSuccess = true
            state.isError = false
            state.error = null
        },
        Fail: (state, action) => {
            state.isLoading = 'idle'
            state.isSuccess = false
            state.isError = true
            state.error = action.payload
        },
        CreateCardReset: (state) => {
            state.isError = false
            state.error = null
            state.isSuccess = false
            state.isLoading = 'idle'
        }
    }
})

export const { Request, Success, Fail, CreateCardReset } = createCardSlice.actions

export const createCardAction = (
    title: string | undefined,
    description: string | undefined,
    date: string | undefined,
    listId: string | undefined
) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(Request)
            const response = await axios.post('/api/card/create', {
                title: title,
                description: description,
                date: date,
                listId: listId
            });

            const data = await response.data;

            dispatch(Success())
        } catch (e) {
            dispatch(Fail(e.response.data.message))
        }

    }
}