# Deck of Cards
A project to draw a deck of cards, and deal a set of cards.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
* npm
* node

### Running

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
npm install
```
Followed by:

```
npm test
```

`index.js` can be used, and a sample set of function invocations have been added in. To run this, simply run `node index.js`.

To add this as part of your existing code based, simply include the file, deck.js within your folder structure and use a require to import it into the necessary file, scuh as

```
const Deck = require('./deck');
const deck1 = new Deck();
```

## Running the tests

To initate the unit tests within the project, `run npm test`.

For unit test coverage run, `npm run unit`.

## Built using

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - The language used
* [Jest](https://jestjs.io) - The unit test framework used

## Authors

* **Jake Collins** - [GitHub](https://github.com/jakec11/deck-of-cards)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Future work

* Change drawn deck into it's own class
* Add UI
* Modify sort functionality to be more dynamic