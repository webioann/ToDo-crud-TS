import React from 'react'
import { IChildrenType } from '../data/types'
import './todos.scss'

const TodosList:React.FC<IChildrenType> = ({ children }) => {

    return (
        <ul className='list'>
            { children }
        </ul>
    )
}
export default TodosList;