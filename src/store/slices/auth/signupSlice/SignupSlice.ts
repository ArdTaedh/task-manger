import { createSlice, Dispatch } from "@reduxjs/toolkit"
import axios from "axios"
import { SignupTypes } from "./signupTypes"

const initialState: SignupTypes = {
    loading: 'idle',
    isError: false,
    error: null,
    message: null,
}

export const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        Request: (state) => {
            state.loading = 'loading'
        },
        Success: (state, action) => {
            state.loading = 'idle'
            state.message = action.payload.message
            state.isError = false
            state.error = null
        },
        Fail: (state, action) => {
            state.loading = 'idle'
            state.message = null
            state.isError = true
            state.error = action.payload
        },
        Reset: (state) => {
            state.isError = false
            state.error = null
            state.message = null
            state.loading = 'idle'
        }
    }
})

export const { Request, Success, Fail, Reset } = signupSlice.actions

export const signupAction = (
    username: string | undefined,
    email: string | undefined,
    password: string | undefined
) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(Request())

            const response = await axios.post('/api/signup', {
                username: username,
                email: email,
                password: password
            })

            const data = await response.data;
            dispatch(Success(data))
        } catch (e) {
            dispatch(Fail(e.response.data.message as string))
        }
    }
}