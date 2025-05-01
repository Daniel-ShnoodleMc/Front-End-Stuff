const pokemonNameInput: HTMLInputElement | null = document.getElementById('pokemon-name-input') as HTMLInputElement;
const addPokemonButton: HTMLButtonElement | null = document.getElementById('add-pokemon-button') as HTMLButtonElement;
const teamContainer: HTMLElement | null = document.getElementById('team-container');
const messageBox: HTMLElement | null = document.getElementById('message-box');
const MAX_TEAM_SIZE: number = 6;
let team: any[] = [];

export function showMessage(message: string, type: string = 'success'): void {
    if (messageBox) {
        messageBox.textContent = message;
        messageBox.className = `show-message ${type}-message`;
        setTimeout(() => {
            if (messageBox) {
                messageBox.className = '';
            }
        }, 3000);
    }
}

export async function fetchPokemonData(pokemonName: string): Promise<any> {
    const url: string = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;
    try {
        const response: Response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Pokémon not found: ${pokemonName}`);
        }
        const data: any = await response.json();
        return data;
    } catch (error) {
        showMessage((error as Error).message, 'error');
        return null;
    }
}

export function getTeam(): any[] {
    const storedTeam: string | null = localStorage.getItem('pokemonTeam');
    if (storedTeam) {
        team = JSON.parse(storedTeam);
    } else {
        team = [];
    }
    return team;
}

export function saveTeam(teamToSave: any[]): void {
    localStorage.setItem('pokemonTeam', JSON.stringify(teamToSave));
}

export async function addPokemonToTeam(): Promise<void> {
    const pokemonName: string = pokemonNameInput?.value.trim() || '';
    
    if (!pokemonName) {
        showMessage('Please enter a Pokémon name.', 'error');
        return;
    }

    const pokemonData: any | null = await fetchPokemonData(pokemonName);
    
    if (!pokemonData) {
        return;
    }

    team = getTeam();
    
    if (team.length >= MAX_TEAM_SIZE) {
        showMessage(`Your team is full (max ${MAX_TEAM_SIZE} Pokémon).`, 'error');
        return;
    }

    const isPokemonInTeam: boolean = team.some(member => member.name === pokemonData.name);
    
    if (isPokemonInTeam) {
        showMessage('This Pokémon is already in your team.', 'error');
        return;
    }

    team.push(pokemonData);
    
    saveTeam(team);
    
    displayTeam();
    
    showMessage(`${pokemonData.name} has been added to your team!`);
    
    if (pokemonNameInput) { 
       pokemonNameInput.value = ''; 
   }
}

export function removePokemonFromTeam(pokemonName: string): void {
   team = getTeam().filter(pokemon => pokemon.name !== pokemonName);
   saveTeam(team);
   displayTeam();
   showMessage(`${pokemonName} has been removed from your team.`);
}

export function displayTeam(): void {
   if (teamContainer) { 
      teamContainer.innerHTML = ''; 
   }
   
   const currentTeam: any[] = getTeam();
   
   currentTeam.forEach(pokemon => {
       const card: HTMLElement = document.createElement('div');
       card.className = 'pokemon-card';
       card.innerHTML = `
           <h3>${pokemon.name}</h3>
           <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
           <button data-pokemon-name="${pokemon.name}">Remove</button>
       `;
       
       const removeButton: HTMLButtonElement | null= card.querySelector('button') as HTMLButtonElement;

       removeButton?.addEventListener('click', () => removePokemonFromTeam(pokemon.name));
       
       if (teamContainer) { 
          teamContainer.appendChild(card); 
      }
   });
}

addPokemonButton?.addEventListener('click', addPokemonToTeam);

window.onload = (): void => {
   displayTeam();
};