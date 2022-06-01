import React from 'react'
import { children_type } from '../data/types'
import './todos.scss'

const TodosList:React.FC<children_type> = ({ children }) => {

    return (
        <ul className='list'>
            { children }
        </ul>
    )
}
export default TodosList;