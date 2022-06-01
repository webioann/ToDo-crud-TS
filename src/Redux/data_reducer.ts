import { createSlice,PayloadAction } from "@reduxjs/toolkit"

type TodoType = {
    id: number;
    checked: boolean;
    title: string; 
}
type TodoDataType = { data: TodoType[] }

const initialState:TodoDataType = { data: [] }

const reducer = createSlice({
    name: "data_reducer",
    initialState,
    reducers: {
        get_data: (state, actions:PayloadAction<TodoType[]>) => {state.data = actions.payload},
    },
});

export const { get_data } = reducer.actions;

export default reducer.reducer;
