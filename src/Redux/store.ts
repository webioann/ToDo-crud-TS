import { configureStore } from '@reduxjs/toolkit'
import { useSelector,useDispatch,TypedUseSelectorHook } from "react-redux"
import reducer  from './reducer'
import data_reducer from './data_reducer';

const store = configureStore({

    reducer: {
        redux: reducer,
        data_reducer: data_reducer
    } 
})
type reduxState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<reduxState> = useSelector;

export default store;

