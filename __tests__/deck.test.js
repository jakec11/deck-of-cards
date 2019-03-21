const Deck = require('../deck');

// Define common fields for tests
const deckSize = 52;
const drawNumber = 7;

/**
 * @description Tests for deck.js
 * Run independently, by using jest --coverage, or npm test
 */
test('if deck has been populated to 52', () => {
  const deck = new Deck();
  expect(deck.deck).toHaveLength(deckSize);
  expect(deck.drawnDeck).toHaveLength(0);
});

test('If 1 card from the deck is drawn when not specifying number to deal', () => {
  const deck = new Deck();
  deck.deal();
  expect(deck.deck).toHaveLength(51);
  expect(deck.drawnDeck).toHaveLength(1);
});

test('If any number passed into deal, deals the number of cards', () => {
  const deck = new Deck();
  deck.deal(drawNumber);
  expect(deck.deck).toHaveLength(deckSize-drawNumber);
  expect(deck.drawnDeck).toHaveLength(drawNumber);
});


test('If trying to deal more cards than there is in the deck, it should return an error', () => {
  const deck = new Deck();
  
  try {
    deck.deal(53);
  } catch(error) {
    expect(error.message).toBe("You've either selected more than the num of cards in the deck or there are no cards left in the deck");
    expect(deck.deck).toHaveLength(deckSize);
    expect(deck.drawnDeck).toHaveLength(0);
  } 
})

// Compare two instances of Deck and see what shuffle looks like
test('Check shuffle has completed and the results are random', () => {
  const deck = new Deck();
  const deck2 = new Deck();

  deck.shuffle();
  deck2.shuffle();
  expect(deck.deck).not.toEqual(deck2.deck);
})


// Check a sort on the drawn deck does not error out, effectively
test('Sort on an empty drawnDeck returns an empty array', () => {
  const deck = new Deck();

  deck.sort();
  expect(deck.drawnDeck).toEqual([]);

});


test('Drawn deck with multiple suits and values are sorted', () => {
  const deck = new Deck();

  const testDrawnDeckSorted = [
    {"suit": "Clubs", "suitIndex": 0, "value": "Ace", "valueIndex": 12}, 
    {"suit": "Spades", "suitIndex": 1, "value": 10, "valueIndex": 8}, 
    {"suit": "Spades", "suitIndex": 1, "value": 2, "valueIndex": 0}, 
    {"suit": "Diamonds", "suitIndex": 3, "value": 10, "valueIndex": 8}
  ];

  deck.drawnDeck = [ 
    { suitIndex: 3, suit: 'Diamonds', value: 10, valueIndex: 8 },
    { suitIndex: 1, suit: 'Spades', value: 10, valueIndex: 8 },
    { suitIndex: 0, suit: 'Clubs', value: 'Ace', valueIndex: 12 },
    { suitIndex: 1, suit: 'Spades', value: 2, valueIndex: 0 }
  ];

  deck.sort();
  expect(deck.drawnDeck).toEqual(testDrawnDeckSorted);
});


test('Same suits in a deck are sorted', () => {
  const deck = new Deck();

  deck.drawnDeck = [ 
    { suitIndex: 1, suit: 'Spades', value: 2, valueIndex: 0 },
    { suitIndex: 1, suit: 'Spades', value: 10, valueIndex: 8 }
  ];

  const suitsSorted = [ 
    { suitIndex: 1, suit: 'Spades', value: 10, valueIndex: 8 },
    { suitIndex: 1, suit: 'Spades', value: 2, valueIndex: 0 }
  ];

  deck.sort();
  expect(deck.drawnDeck).toEqual(suitsSorted);
});

test('Different suits but same card value', () => {
  const deck = new Deck();

  deck.drawnDeck = [ 
    { suitIndex: 3, suit: 'Diamonds', value: 2, valueIndex: 0  },
    { suitIndex: 1, suit: 'Spades', value: 2, valueIndex: 0 }
  ];

  const valueSorted = [ 
    { suitIndex: 1, suit: 'Spades', value: 2, valueIndex: 0 },
    { suitIndex: 3, suit: 'Diamonds', value: 2, valueIndex: 0}
  ];

  deck.sort();
  expect(deck.drawnDeck).toEqual(valueSorted);
});