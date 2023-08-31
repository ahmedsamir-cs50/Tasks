import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const TaskItem = ({onDelete,task,editTodo,toggleComplete}) => {
    
  return (
    // <div className='Todo'>
    //   <p lassName={`${task.completed ? 'completed' : ""}`}>{task.text}</p>
    //   <div>
    //     <button  className='todo-btn' onClick={() => onDelete(task.id)}>Delete</button>
    //     <button   className='todo-btn' onClick={() => editTodo(task.id)} >Modify</button>
    //   </div>
    // </div>
    <div className="Todo">
      
    <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.text}</p>
   
    <div>
    <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
    <FontAwesomeIcon icon={faTrash} onClick={() => onDelete(task.id)} />
    </div>
</div>
  )
}

export default TaskItem
