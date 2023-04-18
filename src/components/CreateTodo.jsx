import { useState } from "react"
import "./CreateTodo.css"

export function CreateTodo({setShowCreate}) {

    const [title, setTitle] = useState("")
    const [description, SetDescription] = useState("")


    const close = ()=> {
        setShowCreate(false)
    }

    const onSave = ()=>{

        if(!title) {
            return
        }

        const newTodo = {
            title,
            description
        }

        console.log(newTodo)



    }

    return <div className="overlay">

        <div className="create-todo">

            <div className="create-header">

                <p>Luo uusi</p>
                <p onClick={close}>X</p>

            </div>

            <label htmlFor="title">Otsikko</label>
            <input value={title} onInput={e => setTitle(e.target.value)} id="title" type="text"></input>
            
            <label htmlFor="description">Kuvaus</label>
            <textarea value={description} onInput={e => SetDescription(e.target.value)} id="description" name="" cols="30" rows="5"></textarea>

            <button onClick={onSave()}>Tallena</button>
            <button onClick={close}>Peruuta</button>


        </div>

    </div>

    // yllä virhe voi olla,e ttä onSaven jälkeen on sulut
}