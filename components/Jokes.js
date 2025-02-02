// 🎭 Fetch a joke from the JokeAPI
function fetchJoke() {
  return axios.get('https://v2.jokeapi.dev/joke/Any?type=twopart&blacklistFlags=nsfw,explicit')
    .then(response => response.data) // Get the joke data from the API response
    .catch(error => { 
      console.error('Error fetching joke:', error); // Log the error if something goes wrong
      return null; // Return null to indicate failure
    });
}

// 🃏 Create a joke card element
function createJokeCard(joke) {
  const card = document.createElement('div'); // Create a div for the joke
  card.className = 'joke-card'; // Add a CSS class for styling

  const setup = document.createElement('p'); // Create a paragraph for the joke setup
  setup.className = 'joke-setup';
  setup.textContent = joke.setup; // Set the setup text

  const delivery = document.createElement('p'); // Create a paragraph for the joke punchline
  delivery.className = 'joke-delivery';
  delivery.textContent = joke.delivery; // Set the punchline text

  // Add setup and delivery to the card
  card.appendChild(setup);
  card.appendChild(delivery);

  return card; // Return the completed joke card
}

// 🖥️ Display a new joke on the page
function displayNewJoke() {
  const container = document.querySelector('.joke-container'); // Get the joke container
  
  container.innerHTML = 'Loading...'; // Show loading state while fetching the joke
  
  fetchJoke().then(joke => {
    if (joke) {
      container.innerHTML = ''; // Clear the previous joke
      const jokeCard = createJokeCard(joke); // Create a new joke card
      container.appendChild(jokeCard); // Add it to the container
    } else {
      container.innerHTML = 'Oops! Could not load joke. Try again!'; // Show error message if joke fetch fails
    }
  });
}

// 🎯 Set up the button to fetch new jokes
const jokeButton = document.querySelector('.new-joke-btn');
jokeButton.addEventListener('click', displayNewJoke); // Fetch and show a new joke when clicked

// 🔄 Load an initial joke when the page loads
displayNewJoke();
