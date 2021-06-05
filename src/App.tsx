import React, {FunctionComponent, useState, ChangeEvent} from 'react';
import { iTask } from './interfaces';
import './App.css';
import TodoTask from './components/TodoTask';
const App:FunctionComponent = ()=> {


  const [task, setTask] = useState<string>("");
  const [days,setDays] = useState<number>(0);
  const [todos, setTodos] = useState<iTask[]>([])


  const handleChange = (e:ChangeEvent<HTMLInputElement>):void =>{
    if(e.target.name === "task")setTask(e.target.value)
    else{
      setDays(Number(e.target.value))
    }
  }

  const addTask = ():void=>{
    const newTask = {task: task, days: days}
    setTodos([...todos, newTask])
    setDays(0);
    setTask("")
  }

  const closeTask = (taskName: string):void =>{
      setTodos(todos.filter((tarea:iTask) =>{ 
        return tarea.task !== taskName
      } ))
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="header">
        <div className="inputContainer">
          <input name="task" value={task} onChange={handleChange} type="text" placeholder="Task.." />
          <input name="days" value={days} onChange={handleChange} type="number" placeholder="Days left " />
        </div>
        <button onClick={addTask} >Add Task</button>
      </div>
      <div className="todoList">
          {todos.map((task: iTask, key: number)=>{
            return <TodoTask key={key} task={task} closeTask={closeTask} />
          })}    
      </div>
    </div>
  );
}

export default App;
