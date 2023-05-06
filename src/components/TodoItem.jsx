import { useState } from "react";
import "./TodoItem.css";
import { toggleDoneWithId } from "../services/todos";
import { TodoPrice } from "./TodoPrice";


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
        <TodoPrice></TodoPrice>
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