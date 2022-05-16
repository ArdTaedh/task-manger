import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { signIn, signOut } from "next-auth/react";
import { LoginTypes } from "./loginTypes";

const initialState: LoginTypes = {
    loading: "idle",
    isSuccess: false,
    isError: false,
    error: null
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        Request: (state) => {
            state.loading = 'loading'
        },
        Success: (state) => {
            state.loading = 'idle'
            state.isError = false
            state.error = null
            state.isSuccess = true
        },
        Error: (state, action: PayloadAction<string>) => {
            state.isError = true
            state.error = action.payload
            state.loading = 'idle'
            state.isSuccess = false
        },
        Reset: (state) => {
            state.isError = false
            state.error = null
            state.isSuccess = false
            state.loading = 'idle'
        },
        Logout: (state) => {
            state.isError = false
            state.error = null
            state.loading = 'idle'
            state.isSuccess = false
        }
    },

})

export const {Request, Success, Error, Reset, Logout} = loginSlice.actions

export const loginAction = (email: string, password: string) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(Request())
    
            const result : any = await signIn(
                'credentials',
                {
                    email: email,
                    password: password,
                    redirect: false,
                    // callbackUrl: '/home'
                }
            )

            
            if (result.error)
                dispatch(Error(result.error))
            else if (result.ok)
                dispatch(Success())
               
        } catch (e) {
            console.log(e as string)
        }
    }
}

export const logoutAction = () => async (dispatch: Dispatch) => {
    try {
        await signOut({redirect: true, callbackUrl: "/"})
        dispatch(Logout())
    } catch (e: any) {
        console.log(Error(e))
    }

}

// export const logoutAction = () => async (dispatch: Dispatch) => {
//     try {
//         dispatch(Logout())
//     } catch (e: any) {
//         console.log(Error(e))
//     }
// }