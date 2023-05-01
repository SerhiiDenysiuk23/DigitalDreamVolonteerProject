import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface testState {
    test: string
}

const initialState: testState = {
    test: ""
}

export const testSlice = createSlice({
    name: "testSlice",
    initialState,
    reducers: {
        test_action:(state, action: PayloadAction<string>) => {
            return {...state, test: action.payload}
        }
    }
})

export const {test_action} = testSlice.actions