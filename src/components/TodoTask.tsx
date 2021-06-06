import React from 'react'
import { iTask } from '../interfaces'

interface props{
    task: iTask;
    closeTask(name:string): void;
}

const TodoTask = ({task, closeTask}:props)=> {
    return (
        <div className="task">
            <div className="content">
                <span>{task.task}</span>
                <span>{task.days} day/s left</span>
            </div>
           
           <button onClick={()=> closeTask(task.task)} >X</button>
        </div>
    )
}

export default TodoTask
