import React from 'react'
import './todos.scss'

const TodoEmpty:React.FC = () => {

    return (
        <li className='item'>
            <h3 className='todo'>
                TODOS IS EMPTY
            </h3>
        </li>
    )
}
export default TodoEmpty;