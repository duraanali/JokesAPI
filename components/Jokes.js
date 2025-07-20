/*
<div class="joke-card">
  <p class="joke-setup">Why are cats so good at video games?</p>
  <p class="joke-delivery">They have nine lives.</p>
</div>
*/

// Let's create a function or a component that displays the joke

function createJokeCard(jokeData) {
  // Step 1: Create the main div
  const mainDiv = document.createElement("div");
  mainDiv.className = "joke-card";

  // Step 2: Create the joke setup paragraph
  const jokeSetup = document.createElement("p");
  jokeSetup.className = "joke-setup";
  jokeSetup.textContent = jokeData.setup;

  // Step 2: Create the joke delivery paragraph
  const jokeDelivery = document.createElement("p");
  jokeDelivery.className = "joke-delivery";
  jokeDelivery.textContent = jokeData.delivery;

  // Step 3: Append
  mainDiv.append(jokeSetup);
  mainDiv.append(jokeDelivery);

  return mainDiv;
}

// To access an object, you need to use either dot notation or bracket notation

// const joke = {
//     setup: "Why are cats so good at video games?",
//     delivery: "They have nine lives."
// }

// const newJoke = {
//     "error": false,
//     "category": "Christmas",
//     "type": "twopart",
//     "setup": "What says Oh Oh Oh?",
//     "delivery": "Santa walking backwards!",
//     "flags": {
//         "nsfw": false,
//         "religious": false,
//         "political": false,
//         "racist": false,
//         "sexist": false,
//         "explicit": false
//     },
//     "id": 244,
//     "safe": true,
//     "lang": "en"
// }


// Promise based API
 

// Create a function that calls the api

function fetchJoke() {
  return axios.get("https://v2.jokeapi.dev/joke/Any?type=twopart&blacklistFlags=nsfw,explicit")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

function displayNewJokes() {
  // How do we connect the function we created to index.html
  // document.querySelector selects existing HTML elements (tags) with class, id or just the element by itself
  const jokeContainer = document.querySelector(".joke-container");

  // loading
jokeContainer.innerHTML = "Loading..."



  // now, get the new joke and connect it to the createJokeCard function

  fetchJoke().then((currentJoke) => {
    console.log("currentJoke", currentJoke)
      // clear the previous joke
     jokeContainer.innerHTML = "";

    jokeContainer.append(createJokeCard(currentJoke));
  });
}


// make the button click work
// createElement is to create NEW element, not to get an existing element
// If you want to create NEW element in the html and it doesn't exist, use document.createElement
// If something is ALREADY in the HTML file, you use document.querySelector (or querySelectorAll) to select it
// document.querySelector works EXACTLY like CSS.

const button = document.querySelector(".new-joke-btn")

// addEventListener = a javascript method that allows you to handle EVENT (such as mouse click, keyboard press etc)

button.addEventListener("click", displayNewJokes)

displayNewJokes();
