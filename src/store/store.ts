import { Action, combineReducers, configureStore, getDefaultMiddleware, ThunkAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import Login from "./slices/auth/loginSlice/loginSlice";
import { signupSlice } from "./slices/auth/signupSlice/SignupSlice";
import User from "./slices/user/userFetchSlice/userFetchSilce";
import { createProjectSlice } from "./slices/projects/createProjectSlice/createProjectSlice";
import { detailProjectSlice } from "./slices/projects/detailProjectSLice/detailProjectSLice";
import { loadState, saveState } from "../../utils/browseLocalStorage";
import { setTasksViewTypeSlice } from "./slices/UI/setTasksViewTypeSlice/setTasksViewTypeSlice";
import { fetchProjectSlice } from "./slices/projects/fetchProjectSlice/fetchProjectSlice";
import { createListSlice } from "./slices/list/createListSlice/createListSlice";
import { fetchListSlice } from "./slices/list/fetchListSlice/fetchListSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const combinedReducer = combineReducers({
    Login,
    User
})

const masterReducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            User: {
                userInfo: state.User.userInfo 
            }
        }


    } else {
        return combinedReducer(state, action)
    }
}

const makeStore = () => configureStore({
    reducer: combinedReducer
})



// export const store = configureStore({
//     reducer: {
//         login: loginSlice.reducer,
//         signup: signupSlice.reducer,
//         userFetch: userFetchSlice.reducer,
//         projectCreate: createProjectSlice.reducer,
//         projectsFetch: fetchProjectSlice.reducer,
//         projectDetail: detailProjectSlice.reducer,
//         tasksViewType: setTasksViewTypeSlice.reducer,
//         listCreate: createListSlice.reducer,
//         listFetch: fetchListSlice.reducer,
//     },
// })

// store.subscribe(
//     // we use debounce to save the state once each 800ms
//     // for better performances in case multiple changes occur in a short time
//     debounce(() => {
//         saveState({
//             // tasksViewType: store.getState().tasksViewType.viewType
//             tasksViewType: store.getState().tasksViewType.viewType
//         });
//     }, 800)
// );

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>;
export type AppDispatch = AppStore['dispatch']

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch 

// export const wrapper = createWrapper<AppStore>(makeStore, 
//     { 
//         debug: false,
//         serializeState: (state) => JSON.stringify(state),
// 	    deserializeState: (state) => JSON.parse(state)
//     }
//     )

export const wrapper = createWrapper(makeStore, { debug: true })