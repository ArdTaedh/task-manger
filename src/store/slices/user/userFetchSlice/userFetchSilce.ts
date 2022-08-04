import axios from "axios";
import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import userFetchTypes from "./userFetchTypes";
import { HYDRATE } from "next-redux-wrapper";

const initialState : userFetchTypes = {
    loading: 'idle',
    isSuccess: false,
    userInfo: null,
    isError: false,
    error: null
}

export const userFetchSlice = createSlice({
    name: 'userFetch',
    initialState,
    reducers: {
        Request: (state) => {
            state.loading = 'loading'
        },
        Success: (state, action) => {
            state.loading = 'idle'
            state.isSuccess = true
            state.userInfo = action.payload
            state.isError = false
            state.error = null
        },
        Error: (state, action: PayloadAction<string>) => {
            state.loading = 'idle'
            state.isSuccess = false
            state.userInfo = null
            state.isError = true
            state.error = action.payload
        },
        Reset: (state) => {
            state.loading = 'idle'
            state.isSuccess = false
            state.userInfo = null
            state.isError = true
            state.error = null
        },
    }
})

export const {Request, Success, Error, Reset, } = userFetchSlice.actions

export const fetchUserAction = () => {
    return async (dispatch: Dispatch) => {
        // try {
        //     dispatch(Request)

        //     const response = await axios.get('/api/user/fetch')
        //     const data = await response.data;
        //     console.log(data)

        //     dispatch(Success(data))
        // } catch (e) {
        //     // dispatch(Error(e.response?.data?.message as string))
        //     dispatch(Error(e))
        //     console.log(e)
        // }
        dispatch(Request)
        
        const response = await axios.get('http://localhost:3000/api/user/fetch')
        const data = await response.data;

        dispatch(Success(data))
    }
}
