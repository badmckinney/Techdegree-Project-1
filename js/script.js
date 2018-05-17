// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// An array containing objects with key/value pairs
var quotes = [
  {
    quote: "Accept who you are. Unless you're a serial killer.",
    source: "Ellen Degeneres",
    citation: "The Ellen Show",
    profession: "Talk show host"
  },
  {
    quote: "Life's short. Stunt it.",
    source: "Rod Kimble",
    citation: "Hot Rod",
    profession: "Professional Stunt-man"
  },
  {
    quote: "I've always considered myself to be just average talent and what I have is a ridiculous, insane, obsessiveness for practicea and preparation.",
    source: "Will Smith",
    citation: "Interview on 60 minutes",
    year: 2007,
    profession: "Actor"
  },
  {
    quote: "Challenges are gifts that force us to search for a new center of gravity.",
    source: "Oprah Winfrey",
    citation: "Oprah",
    profession: "Talk show host"
  },
  {
    quote: "I have a dream.",
    source: "Martin Luther King Jr.",
    citation: "I Have a Dream",
    year: 1963,
    profession: "Minister, Writer, Civil Rights Activist"
  },
  {
    quote: "A house divided against itself cannot stand.",
    source: "Abraham Lincoln",
    citation: "A House Divided Speech",
    year: 1858,
    profession: "P.O.T.U.S."
  }
];


// selects a random quote by generating a random number and returning
// the quote with the matching index value
function getRandomQuote() {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
};


// creates variable to hold the value of the getRandomQuote function.
// creates a variable to hold the quote box element.
// accesses the keys of the selected object to populate their values
// and formulate the quote that will be displayed on the page.
// adds to the quote based on the availability of optional information keys.
// updates the inner html of quote box to change the quote displayed on page.
function printQuote() {
  var chosenQuote = getRandomQuote();
  var quoteBox = document.getElementById('quote-box');
  var message =
    `<p class="quote">${chosenQuote.quote}</p>
    <p class="source">${chosenQuote.source}
    <span class="profession">${chosenQuote.profession}</span>`</p>;

  if (chosenQuote.citation === true) {
    message += `<span class="citation">${chosenQuote.citation}</span>`;
  };

  if (chosenQuote.year === true) {
    message += `<span class="year">${chosenQuote.year}</span>`;
  };

  quoteBox.innerHTML = message;

};
