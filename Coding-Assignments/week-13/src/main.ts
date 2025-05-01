import './style.css';
import {
  showMessage,
  fetchPokemonData,
  getTeam,
  saveTeam,
} from './function-junction'; // Adjust path if needed

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Build Your Pokémon Team</h1>
    <div id="pokemon-search">
      <input type="text" id="pokemon-name-input" placeholder="Enter Pokémon Name">
      <button id="add-pokemon-button">Add to Team</button>
    </div>
    <div id="team-container">
    </div>
    <div id="message-box"></div>
  </div>
`;

// Get references to DOM elements *after* they are added to the DOM
const pokemonNameInput = document.getElementById('pokemon-name-input') as HTMLInputElement | null;
const addPokemonButton = document.getElementById('add-pokemon-button') as HTMLButtonElement | null;
const teamContainer = document.getElementById('team-container') as HTMLElement | null;

// Initialize the team from local storage on load
let team: any[] = getTeam();
displayTeam(); // Initial display of the team

// Attach event listeners
addPokemonButton?.addEventListener('click', async () => {
  const pokemonName = pokemonNameInput?.value.trim();
  if (pokemonName) {
    const pokemonData = await fetchPokemonData(pokemonName);
    if (pokemonData) {
      const currentTeam = getTeam();
      if (currentTeam.length < 6 && !currentTeam.some(p => p.name === pokemonData.name)) {
        const updatedTeam = [...currentTeam, pokemonData];
        saveTeam(updatedTeam);
        team = updatedTeam; // Update local team variable
        displayTeam();
        showMessage(`${pokemonData.name} added to your team!`);
        if (pokemonNameInput) {
          pokemonNameInput.value = '';
        }
      } else if (currentTeam.some(p => p.name === pokemonData.name)) {
        showMessage('This Pokémon is already in your team.', 'error');
      } else {
        showMessage('Your team is full!', 'error');
      }
    }
  } else {
    showMessage('Please enter a Pokémon name.', 'error');
  }
});

// Function to handle removing a Pokémon (called from the displayed cards)
function handleRemovePokemon(pokemonName: string) {
  const updatedTeam = getTeam().filter(p => p.name !== pokemonName);
  saveTeam(updatedTeam);
  team = updatedTeam; // Update local team variable
  displayTeam();
  showMessage(`${pokemonName} removed from your team.`);
}

// The displayTeam function should now be responsible for rendering the team
// and attaching event listeners to the remove buttons
function displayTeam(): void {
  if (teamContainer) {
    teamContainer.innerHTML = '';
    const currentTeam = getTeam();
    currentTeam.forEach(pokemon => {
      const card = document.createElement('div');
      card.className = 'pokemon-card';
      card.innerHTML = `
        <h3>${pokemon.name}</h3>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <button class="remove-btn" data-pokemon-name="${pokemon.name}">Remove</button>
      `;
      teamContainer.appendChild(card);
    });

    // Attach event listeners to the remove buttons *after* they are created
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const pokemonToRemove = button.getAttribute('data-pokemon-name');
        if (pokemonToRemove) {
          handleRemovePokemon(pokemonToRemove);
        }
      });
    });
  }
}

// The window.onload is no longer strictly necessary as we are calling displayTeam directly