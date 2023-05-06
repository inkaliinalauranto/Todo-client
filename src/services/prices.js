const STORE_API_BASE_URL = "https://fakestoreapi.com/products/"


// Koska tuotteita rajapinnassa on 20 kpl, arvotaan routen loppu
// väliltä 1-20 getRandomInt-funktiolla.

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}


// muodostetaan route arvotun loppuosan perusteella

export async function getProduct() {
    const id = getRandomInt(20)
    const response = await fetch(STORE_API_BASE_URL + id)
    if(!response.ok) throw new Error("Request failed with statuscode: " + response.status)
    const data = await response.json()
    return data
}
