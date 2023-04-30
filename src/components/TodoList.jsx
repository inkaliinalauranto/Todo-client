import { TodoItem } from "./TodoItem"
import "./TodoList.css"



// alla [] on oletusarvo, jottei tule virhettä
export function TodoList({ todos = [], setSelectedId }) {
    const todoItems = todos.map((todo)=>{
      return <TodoItem todo={todo} key={todo.id} setSelectedId={setSelectedId}></TodoItem>
    })
    return <div className="todo-list">{todoItems}</div>;  
  }
  
  // yo. TodoList-komponentti
  // React mahdollistaa props-ominaisuuden, jolla TodoList-komponentille
  // voidaan välittää dataa parent- eli App-komponentista
  // nyt siis todos on välitetty propsina parent-funktiosta
  // map käy arrayn jokaisen komponentin yksitellen läpi

