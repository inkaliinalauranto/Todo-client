import { useState } from "react"
import { AppTitle } from "./components/AppTitle"
import { TodoButtons } from "./components/TodoButtons"
import { CreateButton } from "./components/CreateButton"
import { CreateTodo } from "./components/CreateTodo"
import { TodoList } from "./components/TodoList"


function App() {

  const [showCreate, setShowCreate] = useState(false)
 
  const todos = [
    {
      id: 1,
      title: "Hae maitoa kaupasta",
      description: "Prisma",
      created_at: 31236187,
      done: false
    },
    {
      id: 2,
      title: "Muista palauttaa tehtävät",
      description: "apikurssi",
      created_at: 31236187,
      done: false
    },
    {
      id: 3,
      title: "Esimerkki",
      description: "dggdg",
      created_at: 31236187,
      done: false
    }
  ]

  return (
    <div>

      <AppTitle></AppTitle>
      <TodoButtons></TodoButtons>
      <TodoList todos={todos}> </TodoList>
      <CreateButton onClicked={()=>setShowCreate(!showCreate)}></CreateButton>
      {showCreate && <CreateTodo setShowCreate={setShowCreate}></CreateTodo>}

    </div>
  )
}

// yllä TodoList:n parametri todo:n kohdalle syötetään App-funktion muuttujassa todo oleva array
 
export default App

// App on juurikomponentti, jonka sisälle koko sovellus tulee rakentumaan