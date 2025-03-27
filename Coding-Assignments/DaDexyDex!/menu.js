class Pokemon{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
}

class Menu{
    constructor(){
        this.pokemon=[];
    }

addPkmn() {
    let pkmnName = prompt("Enter Pokemon's Name");
    let pkmnType = prompt("Enter Pokemon's Type");
    this.pokemon.push(new Pokemon (pkmnName, pkmnType));
}

deletePkmn(){
    let pkmnIndex = prompt("Enter Pokemon Number to Remove it!");
    this.pokemon.splice(pkmnIndex, 1);
}

viewPkmn(){
    let displayPokemon = '';
    for(let i=0; i < this.pokemon.length; i++){
        displayPokemon += `${this.pokemon[i].name} ${this.pokemon[i].type}`
    }

    alert(displayPokemon);

    alert(`
    Pokedex:
        -=-=-=-=-=-=-=-=-=-=-=-=-=-=-


    ${displayPokemon}
        `)
}

showMainMenu(){
    return prompt(`
        Main Menu:
        =-=-=-=-=-=-=-=-=-=-=-=
        0) Exit Menu
        1) Add Pokemon
        2) Delete Pokemon
        3) View All Pokemon
        `)
}

start(){
    let selection = this.showMainMenu();

    while(selection != 0){
        switch(selection){
        
            case "1": this.addPkmn();
            break;

            case "2": this.deletePkmn();
            break;

            case "3": this.viewPkmn();
            break;

            default: selection = 0;
        }
        selection = this.showMainMenu();
    }
    alert("Closing the Dex . . .")
}

}


let menu = new Menu();

menu.start();