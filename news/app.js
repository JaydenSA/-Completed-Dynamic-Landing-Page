const Quotes = require("randomquote-api");

// To get one random Quote you do

const randomquote = Quotes.randomQuote();
console.log(randomquote);

// to get Ten random quotes you do

const randomTen = Quotes.randomTen();
console.log(randomTen);

// to get a number amount of quotes by who said them

const getbyauthor = Quotes.getbyauthor("J.R.R. Tolkien", 10);
console.log(getbyauthor);