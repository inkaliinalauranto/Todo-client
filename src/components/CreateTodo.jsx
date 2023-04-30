import { useState } from "react"
import "./CreateTodo.css"
import { createTodo } from "../services/http"
import { Overlay } from "./Overlay.jsx"

export function CreateTodo({ setShowCreate }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const close = ()=> {
        setShowCreate(false)
    }

    const onSave = ()=>{

        if(!title) {
            return;
        }

        const newTodo = {
            title,
            description
        }

        createTodo(newTodo).then(()=>{
            close()
        })
    };

    return (
        <Overlay close={close}>
            <label htmlFor="title">Otsikko</label>
            <input 
                value={title} 
                onInput={e => setTitle(e.target.value)} 
                id="title" 
                type="text"
            />
            
            <label htmlFor="description">Kuvaus</label>
            <textarea 
                value={description} 
                onInput={e => setDescription(e.target.value)} 
                id="description" 
                name="" 
                cols="30" 
                rows="5"
            />

            <button onClick={onSave}>Tallenna</button>
        </Overlay>
    );
}

    // hox! Ei saa olla sulkuja, kun viitataan muuttujaan, joka pitää sisällään nuolifunktion
    // closessa kuitenkin esimerkin mukaan pitää olla sulut