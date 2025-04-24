const pokemonNameInput = document.getElementById('pokemon-name-input');
const addPokemonButton = document.getElementById('add-pokemon-button');
const teamContainer = document.getElementById('team-container');
const messageBox = document.getElementById('message-box');
const MAX_TEAM_SIZE = 6;
let team = [];
function showMessage(message, type = 'success') {
    messageBox.textContent = message;
    messageBox.className = `show-message ${type}-message`;
    setTimeout(() => {
        messageBox.className = '';
    }, 3000);
}
async function fetchPokemonData(pokemonName) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Pokémon not found: ${pokemonName}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        showMessage(error.message, 'error');
        return null;
    }
}
function getTeam() {
    const storedTeam = localStorage.getItem('pokemonTeam');
    if (storedTeam) {
        team = JSON.parse(storedTeam);
    } else {
        team = [];
    }
    return team;
}
function saveTeam(team) {
    localStorage.setItem('pokemonTeam', JSON.stringify(team));
}
async function addPokemonToTeam() {
    const pokemonName = pokemonNameInput.value.trim();
    if (!pokemonName) {
        showMessage('Please enter a Pokémon name.', 'error');
        return;
    }
    const pokemonData = await fetchPokemonData(pokemonName);
    if (!pokemonData) {
        return;
    }
    team = getTeam();
    if (team.length >= MAX_TEAM_SIZE) {
        showMessage(`Your team is full (max ${MAX_TEAM_SIZE} Pokémon).`, 'error');
        return;
    }
    const isPokemonInTeam = team.some(member => member.name === pokemonData.name);
    if (isPokemonInTeam) {
        showMessage('This Pokémon is already in your team.', 'error');
        return;
    }
    team.push(pokemonData);
    saveTeam(team);
    displayTeam();
    showMessage(`${pokemonData.name} has been added to your team!`);
    pokemonNameInput.value = '';
}
function removePokemonFromTeam(pokemonName) {
    team = getTeam().filter(pokemon => pokemon.name !== pokemonName);
    saveTeam(team);
    displayTeam();
    showMessage(`${pokemonName} has been removed from your team.`);
}
function displayTeam() {
    teamContainer.innerHTML = '';
    const currentTeam = getTeam();
    currentTeam.forEach(pokemon => {
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        card.innerHTML = `
            <h3>${pokemon.name}</h3>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <button data-pokemon-name="${pokemon.name}">Remove</button>
        `;
        const removeButton = card.querySelector('button');
        removeButton.addEventListener('click', () => removePokemonFromTeam(pokemon.name));
        teamContainer.appendChild(card);
    });
}
addPokemonButton.addEventListener('click', addPokemonToTeam);
window.onload = () => {
    displayTeam();
};