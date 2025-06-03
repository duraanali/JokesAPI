// 1. Call the api, using Axios

const API_URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=twopart"

function fetchJoke() {
    return axios.get(API_URL)
        .then((response) => response.data)
        .catch((error) => console.log(error))
}

// 2. Create a component/function to display the data from the API.

function createJokeCard(joke) {

    // Main div-ka aan ku xirmeyno
    const mainDiv = document.querySelector(".joke-container")

    // Wixii hore oo html ah oo ku jiray meesha ka bixi
    mainDiv.innerHTML = ""

    // Joke Card main div
    const mainJokeDiv = document.createElement("div")
    mainJokeDiv.className = "joke-card"

    // Joke Setup p tag <p class="joke-setup">
    const setUp = document.createElement("p")
    setUp.className = "joke-setup"
    setUp.textContent = joke.setup

    // Delivery P tag <p class="joke-delivery">
    const delivery = document.createElement("p")
    delivery.className = "joke-delivery"
    delivery.textContent = joke.delivery

    // Isku xirka
    mainDiv.append(mainJokeDiv)
    mainJokeDiv.append(setUp)
    mainJokeDiv.append(delivery)

    return mainDiv

}


// 3. Isku xir laba function oo kore, kadib ku xir HTML-ka ku jirto index.html

function displayJoke() {
    fetchJoke()
        .then((joke) => {
            createJokeCard(joke)
        })
}


// Button-ka ka shaqeysii
const jokeButton = document.querySelector(".new-joke-btn")

// Event Listner
jokeButton.addEventListener("click", displayJoke)

displayJoke()
