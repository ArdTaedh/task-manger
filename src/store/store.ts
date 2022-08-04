import { Action, combineReducers, configureStore, getDefaultMiddleware, ThunkAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import Login from "./slices/auth/loginSlice/loginSlice";
import { signupSlice } from "./slices/auth/signupSlice/SignupSlice";
import { userFetchSlice } from "./slices/user/userFetchSlice/userFetchSilce";
import { createProjectSlice } from "./slices/projects/createProjectSlice/createProjectSlice";
import { detailProjectSlice } from "./slices/projects/detailProjectSLice/detailProjectSLice";
import { loadState, saveState } from "../../utils/browseLocalStorage";
import { setTasksViewTypeSlice } from "./slices/UI/setTasksViewTypeSlice/setTasksViewTypeSlice";
import { fetchProjectSlice } from "./slices/projects/fetchProjectSlice/fetchProjectSlice";
import { createListSlice } from "./slices/list/createListSlice/createListSlice";
import { fetchListSlice } from "./slices/list/fetchListSlice/fetchListSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import loginSlice from "./slices/auth/loginSlice/loginSlice";
import { removeListSlice } from "./slices/list/removeListSlice/removeListSlice";
import { createCardSlice } from "./slices/card/createCardSlice/createCardSlice";
import { removeCardSlice } from "./slices/card/removeCardSlice/removeCardSlice";

export const store = configureStore({
    reducer: {
        login: loginSlice,
        signup: signupSlice.reducer,
        userFetch: userFetchSlice.reducer,
        projectCreate: createProjectSlice.reducer,
        projectsFetch: fetchProjectSlice.reducer,
        projectDetail: detailProjectSlice.reducer,
        tasksViewType: setTasksViewTypeSlice.reducer,
        listCreate: createListSlice.reducer,
        listFetch: fetchListSlice.reducer,
        listRemove: removeListSlice.reducer,
        cardCreate: createCardSlice.reducer,
        cardRemove: removeCardSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector