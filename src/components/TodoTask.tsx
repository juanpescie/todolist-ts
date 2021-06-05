import React from 'react'
import { iTask } from '../interfaces'

interface props{
    task: iTask;
}

const TodoTask = ({task}:props)=> {
    return (
        <div className="task">
            <div className="content">
                <span>{task.task}</span>
                <span>{task.days}</span>
            </div>
           
           <button>X</button>
        </div>
    )
}

export default TodoTask
