
import React, { useRef, useState } from "react";


 export const  EditTask = ({editfun,item}) => {
    
    const [Value, setValue] = useState(item.text);
   
  
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const handleClick = (e) => {
 e.preventDefault();
 editfun(Value,item.id);
    };
    

   
  return (
    <div>
      <div>
        <forum className="TodoForm">
        <input onChange={handleChange} value={Value}  className="todo-input" ></input>
        <button onClick={handleClick} className='todo-btn'> EDIT</button>
        </forum>
      </div>
     
    </div>
  )
}


