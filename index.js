const Deck = require('./deck');

// Declare new instance of Deck
const deck = new Deck();

// Shuffle the deck
deck.shuffle();

// Deal 5 (x num of) cards from deck
deck.deal(5);

// Print drawn cards
console.log(deck.drawn);

// Sort drawn cards
deck.sort();

// Print sorted drawn cards
console.log(deck.drawn);