
class Deck {
    constructor() {
        this.deck = [];
        this.ranks = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King",
        ];
        this.suits = [
            "♠ Spades ♠", 
            "♥ Hearts ♥", 
            "♦ Diamonds ♦", 
            "♣ Clubs ♣"
        ]
    }

    makeTheDeck() {
        for (let i = 0; i < this.suits.length; i++) {
            for (let c = 0; c < this.ranks.length; c++) {
                let card = {
                    name: `${this.ranks[c]} of ${this.suits[i]}`,
                    value: c + 1
                }
                this.deck.push(card)
            }
        }
    }

    shuffleThis() {
        for (let i = this.deck.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i+1));

            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
            }
    }

}

class Gamer {
constructor() {
    this.player1 = {
        name: 'Kiki',
        score: 0,
        hand: []
    }
    this.player2 = {
        name: 'Chowder',
        score: 0,
        hand: []
    }
}

playGame() {
    const deck = new Deck
    deck.makeTheDeck()
    deck.shuffleThis()

   while (deck.deck.length !==0) {
     
    this.player1.hand.push(deck.deck.shift())
    this.player2.hand.push(deck.deck.shift())
   }

for (let i = 0; i < this.player1.hand.length; i++) {
    if (this.player1.hand[i].value > this.player2.hand[i].value) {
        this.player1.score ++
        console.log(`
            Kiki's Card: ${this.player1.hand[i].name}
            Chowder's Card: ${this.player2.hand[i].name}
            Kiki got a point!
            Current Score: K: ${this.player1.score} C: ${this.player2.score}
            `)
    } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
        this.player2.score ++
        console.log(`
            Kiki's Card: ${this.player1.hand[i].name}
            Chowder's Card: ${this.player2.hand[i].name}
            Chowder got a point!
            Current Score: K: ${this.player1.score} C: ${this.player2.score}
            `)
    } else {
        console.log(`
            Kiki's Card: ${this.player1.hand[i].name}
            Chowder's Card: ${this.player2.hand[i].name}
            It's a Tie...
            Current Score: K: ${this.player1.score} C: ${this.player2.score}
            `)
    }
     
}

if (this.player1.score > this.player2.score) {
    console.log(`
        Kiki's the winner with ${this.player1.score} points!

        Chowder lost with ${this.player2.score} points...
        `)
} else if (this.player1.score < this.player2.score) {
    console.log(`
        Chowder's the winner with ${this.player2.score} points!

        Kiki lost with ${this.player1.score} points...
        `)
} else {
    console.log(`
        It's a tie with ${this.player2.score} points each!
        `)
}

}

}

const gamer = new Gamer
gamer.playGame()