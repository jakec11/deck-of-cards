module.exports = class Deck {
  
  /**
   * @description Define the variables to create a deck
   */
  constructor() {
    this.deck = [];
    this.drawnDeck = [];
    this.reset();
  } 

  /**
   * @description Shuffle the deck using the Fisher-Yates method
   * @returns {Object} this
   */
  shuffle() {
    const deck = this.deck;
    let l = deck.length;
    let i;

    while(l) {
      i = Math.floor(Math.random() * l--);
      [deck[l], deck[i]] = [deck[i], deck[l]];
    }

    return this;
  }

  /**
   * @description Deals a number of cards from the deck, while there is enough 
   * cards within the deck to deal.
   * @returns {Object} this
   * @returns {Error} Error, when there are no more cards to deal.
   */
  deal(num=1) {
    if (this.deck.length >= num && this.deck.length >= 0) {
      this.drawnDeck.unshift(...this.deck.splice(this.deck.length-num, this.deck.length));
    } else {
      throw new Error('You\'ve either selected more than the num of cards in the deck or there are no cards left in the deck');
    }

    return this;
  }

  /**
   * @description Sorts cards by suit and then by value
   */
  sort() {
    return this.drawnDeck.sort(function(a, b){
        if (b.suitIndex > a.suitIndex) return -1;
        if (b.suitIndex < a.suitIndex) return 1;

        if (b.valueIndex > a.valueIndex) return 1;
        if (b.valueIndex < a.valueIndex) return -1;
    });
    
  }

  /**
   * @description Creates/resets the cards - this creates four defined suits, with 12 in a suit.
   * @returns {Object} this
   */
  reset() {
    const suits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

    for(let suit in suits) {
      for(let value in values) {
        this.deck.push({'suitIndex': parseInt(suit), 'suit': suits[suit], 'value': values[value], 'valueIndex': parseInt(value)});
      }
    }
  }

};