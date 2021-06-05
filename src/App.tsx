import React, {FunctionComponent} from 'react';
import './App.css';

const App:FunctionComponent = ()=> {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Task.." />
          <input type="number" placeholder="Days left " />
        </div>
        <button>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;
