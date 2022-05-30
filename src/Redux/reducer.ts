import { createSlice,PayloadAction } from "@reduxjs/toolkit"

type InitialState = {
    url: string;
    input_value: string;
    test: string;
}
const initialState:InitialState = {
    url: 'http://localhost:888/todos',
    input_value: '',
    test: 'TEST FROM REDUX'
}
const reducer = createSlice({
    name: "redux",
    initialState,
    reducers: {
        get_value: (state, actions:PayloadAction<string>) => {state.input_value = actions.payload},
    },
});

export const { get_value } = reducer.actions;

export default reducer.reducer;
