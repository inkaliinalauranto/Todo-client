import { useState } from "react"
import "./TodoItem.css"
import { toggleDoneWithId } from "../services/http";


export function TodoItem({ todo, setSelectedId }) {
    const [done, setDone] = useState(todo.done);
  
    const toggle = ()=>{
      const NewDoneValue = !done;

      setDone(NewDoneValue);
      toggleDoneWithId(todo.id, NewDoneValue).then((data)=>{
        console.log(data);
      })
    };
  
    return (
      <div onClick={()=> setSelectedId(todo.id)} className='todo-item'>
          <p>{todo.title}</p>
          <input 
            checked={done} 
            value={done} 
            onChange={toggle} 
            onClick={(e) => e.stopPropagation()}
            type="checkbox" 
          />
        </div>
        );
  }