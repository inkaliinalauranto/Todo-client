import { useState } from "react"


export function TodoItem({todo}) {

    const [done, setDone] = useState(todo.done)
  
    const toggle = ()=>{
      setDone(!done)
    }
  
    return <div onClick={toggle}>{todo.title}, {todo.id}, {done.toString()}</div>
      // nyt todoItems ei sisällä javascriptiä vaan yksittäisiä html-elementtejä, joka alla palautetaan TodoList-kommponentista
      // react taustalla katsoo, että done on boolean arvo, ja arvio sen olemattomaksi, minkä vuoksi ei sitä näytä
  }