import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { removeCardTypes } from "./removeCardTypes";

const initialState : removeCardTypes = {
    isLoading: "idle",
    isSuccess: false,
    isError: false,
    error: null
}

export const removeCardSlice = createSlice({
    name: "removeCard",
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
        RemoveCardReset: (state) => {
            state.isError = false
            state.error = null
            state.isSuccess = false
            state.isLoading = 'idle'
        }
    }
})

export const { Request, Success, Fail, RemoveCardReset } = removeCardSlice.actions

export const removeCardAction = (cardId: string, listId: string) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(Request)
            
            await axios.post(`/api/card/${cardId}/remove`, {
                listId: listId
            });

            dispatch(Success())
        } catch (e) {
            dispatch(Fail(e.response.data.message))
        }

    }
}