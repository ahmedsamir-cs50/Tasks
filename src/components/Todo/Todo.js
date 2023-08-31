
import React, { useEffect, useRef, useState } from "react";
import shortid from "shortid";
import TaskItem from './TaskItem';
import { EditTask } from "./Edittask";

const Todo = () => {
    
    const [text, setText] = useState("");
    const [submit, setsubmit] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      if(localStorage.length >0){
      const savedTodos = JSON.parse(localStorage.getItem('Tasks')) || [];
      setTasks(savedTodos);}
  }, []);
   
    const handleClick = (e) => {
      e.preventDefault();
      const task = { id: shortid.generate(), text: text, completed: false , isEditing: false  };
      const newTasks=[...tasks, task];
      setTasks(newTasks)
       localStorage.setItem('Tasks', JSON.stringify(newTasks))
       console.log(newTasks)
    };
    
     const onDelete =(id)=>{
        console.log(id)
        const newTasks=tasks.filter((task)=> task.id !==id)
        setTasks(newTasks)
        console.log(tasks)
        localStorage.setItem('Tasks', JSON.stringify(newTasks));

     }
     const editTodo =(id)=>{
      setTasks(
        tasks.map((todo)=>
          todo.id==id?{...todo,isEditing:!todo.isEditing}:todo
        )
      )
    
     }
     const editTask =(newtext,id)=>{
      const newTasks=
        tasks.map((todo)=>
          todo.id==id?{...todo,text:newtext,isEditing:!todo.isEditing}:todo
        )
      
        setTasks(newTasks)
      localStorage.setItem('Tasks', JSON.stringify(newTasks));

     }
     const toggleComplete =(id)=>{
      const newTasks=
        tasks.map((todo)=>
          todo.id==id?{...todo,completed:!todo.completed}:todo
        )
        setTasks(newTasks)
      localStorage.setItem('Tasks', JSON.stringify(newTasks));

     }


   
  return (
    <div  className="TodoWrapper">
      <form  onSubmit={handleClick} className="TodoForm">
        <input value={text} className="todo-input" onChange={(e)=>setText(e.target.value)}></input>
        <button className='todo-btn' type="submit"> ADD</button>
      </form>
      <div>
      {tasks.length >0 ?  tasks.map((item, index) => 
            item.isEditing?( <EditTask editfun={editTask} item={item} />) :(
              <TaskItem key={index} task={item} onDelete={onDelete}
              editTodo={editTodo} toggleComplete={toggleComplete}/>
            )
          )
        : null}
        </div>
    </div>
  )
}

export default Todo
