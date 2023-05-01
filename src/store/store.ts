import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {testSlice} from "./test/testSlice";

const rootReducer = combineReducers({
    test: testSlice.reducer
})

export const store = configureStore({
    reducer: {
        rootReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;