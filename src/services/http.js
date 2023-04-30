// eriytetään rajapintakyselyt omaan tiedostoon - separation of consern

const TODO_API_BASE_URL = "http://localhost:8000"

async function todoApi(endpoint, options = {}) {
    const response = await fetch(TODO_API_BASE_URL + endpoint, options) // jos objekti on tyhjä, funktio suorittaa GET requestin, ja koska fetch tässä on asynkroninen, ótetaan await:llä promise pois
    if (!response.ok) throw new Error("Request failed with statuscode: " + response.status)
    const data = await response.json()
    return data
}


function createQueryParams(params) {
    if(!params) return ""
    return "?" + new URLSearchParams(Object.entries(params)).toString()
}


export async function getTodos(params) {
    const todos = await todoApi("/todos" + createQueryParams(params)); // asynkroninen funktio (todoAPi) palauttaa aina promisen, ja siksi laitettava await
    return todos
}


export async function createTodo(newTodo) {
    const options = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newTodo),
    };
    const todo = await todoApi("/todos", options);
    return todo
}


export async function removeTodoById(id) {
    const endpoint = "/todos/" + id
    const options = {
        method: "DELETE"
    };
    await todoApi(endpoint, options)
}


export async function getTodoById(id) {
    const endpoint = "/todos/" + id
    const todo = await todoApi(endpoint);
    return todo
}


export async function updateTodoWithId(id, editedTodo) {
    const endpoint = "/todos/" + id
    const options =  {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(editedTodo),
    };
    try {
        const todo = await todoApi(endpoint, options);
        return todo;
    } catch (error) {
        console.error(error);
    }
}


export async function toggleDoneWithId(id, currentDone) {
    const endpoint = "/todos/" + id + "/" + currentDone
    const options = {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
    };
    try {
        const todo = await todoApi(endpoint, options);
        return todo;
    } catch (error) {
        console.error(error);
    }
}