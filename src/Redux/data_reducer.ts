import { createSlice,PayloadAction } from "@reduxjs/toolkit"

type Todo = {
    id: number;
    checked: boolean;
    title: string; 
}
type TodoData = { data: Todo[] }
const initialState:TodoData = { data: [] }

const reducer = createSlice({
    name: "data_reducer",
    initialState,
    reducers: {
        get_data: (state, actions:PayloadAction<Todo[]>) => {state.data = actions.payload},
    },
});

export const { get_data } = reducer.actions;

export default reducer.reducer;
