import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { loginSlice } from "./slices/auth/loginSlice/loginSlice";
import { signupSlice } from "./slices/auth/signupSlice/SignupSlice";
import {userFetchSlice} from "./slices/user/userFetchSlice/userFetchSilce";
import {createProjectSlice} from "./slices/projects/createProjectSlice/createProjectSlice";
import {detailProjectSlice} from "./slices/projects/detailProjectSLice/detailProjectSLice";


export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        signup: signupSlice.reducer,
        userFetch: userFetchSlice.reducer,
        projectCreate: createProjectSlice.reducer,
        projectDetail: detailProjectSlice.reducer
    },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()