import React from 'react'
import Input from './Input'
import TodosList from './TodosList'
import Todo from './Todo'
import TodoEmpty from './TodoEmpty'
import { useAppSelector } from '../Redux/store'
import { useJsonServer } from '../hooks/useJsonServer'
import './app.scss'

const App:React.FC = () => {

    const { errors,loading } = useJsonServer()
    const data = useAppSelector(state => state.data_reducer.data)
    
    return (
        <div className='container'>
            <Input/>
            <TodosList>
                {data.length > 0 ? <Todo/> : <TodoEmpty/>}
            </TodosList>
        </div>
    )
}
export default App;
