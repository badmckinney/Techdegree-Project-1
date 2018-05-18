// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// An array containing quote objects with key/value pairs
var quotes = [
  {
    quote: "Accept who you are. Unless you're a serial killer.",
    source: "Ellen Degeneres",
    citation: "The Ellen Show",
    profession: "Talk show host",
    tag: "#funny #comedy "
  },
  {
    quote: "Life's short. Stunt it.",
    source: "Rod Kimble",
    citation: "Hot Rod",
    profession: "Professional Stunt-man",
    tag: "#funny #movie #hotrod"
  },
  {
    quote: "I've always considered myself to be just average talent and what I have is a ridiculous, insane, obsessiveness for practice and preparation.",
    source: "Will Smith",
    citation: "Interview on 60 minutes",
    year: 2007,
    profession: "Actor",
    tag: "#motivation #inspiration #interview #actors"
  },
  {
    quote: "Challenges are gifts that force us to search for a new center of gravity.",
    source: "Oprah Winfrey",
    citation: "Oprah",
    profession: "Talk show host",
    tag: "#motivation #oprah"
  },
  {
    quote: "I have a dream.",
    source: "Martin Luther King Jr.",
    citation: "I Have a Dream",
    year: 1963,
    profession: "Minister, Writer, Civil Rights Activist",
    tag: "#history #MLK #activism"
  },
  {
    quote: "A house divided against itself cannot stand.",
    source: "Abraham Lincoln",
    citation: "A House Divided Speech",
    year: 1858,
    profession: "Former President",
    tag: "#history #president #america"
  },
  {
    quote: "Yo, Adrian.",
    source: "Rocky Balboa",
    citation: "Rocky II",
    profession: "World Champion Boxer",
    tag: "#movie #rocky #boxing"
  },
  {
    quote: "I did not have sexual relations with that woman",
    source: "Bill Clinton",
    citation: "C-SPAN Interview",
    year: 1998,
    profession: "Former President",
    tag: "#president #scandal #news #interview"
  },
  {
    quote: "Let me take you to NeverNeverLand and be your Peter Pan.",
    source: "Michael Jackson",
    profession: "King of Pop",
    tag: "#music #popstar"
  },
  {
    quote: "Cut off your nose to spider face.",
    source: "Michael G. Scott",
    citation: "The Office",
    profession: "Regional Manager of Dunder Mifflin",
    tag: "#comedy #funny #tvshow #office"
  },
  {
    quote: "Scooby Snack, jurassic plastic, gas booby trap.",
    source: "Snoop Dogg",
    citation: "Ghostface Killah, 'Nutmeg'",
    year: 2010,
    profession: "Rapper",
    tag: "#music #rap #nonsense"
  },
  {
    quote: "Burbank California, grocery store, Sunday afternoon. You: black girl, white shorts. Me: white guy, baby blue fubu suit",
    source: "Nick Thune",
    citation: "Craigslist – Missed Connections",
    profession: "Comedian",
    tag: "#standup #comedy #funny #jokes"
  }
];

// An array of colors to apply to background, button, and tag text color.
var colors = [ "#f4bcf4", "#ff7373", "#72c245", "#fdd32b", "#33eee0", "#ff9702",
"#DC143C", 	"#87CEFA", 	"#C0C0C0", "#BA55D3", "#FFA07A", "#8B0000", "	#6B8E23",
"#4682B4", "	#8B4513", "#424242", "#FF66CC"];


// - Randomly selects a color from the colors array by generating a random
//   number and returning the color with the matching index value.
// - Changes the pages background, button, and tag text color according to the returned color.
function changeColor() {
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById('loadQuote').style.backgroundColor = randomColor;
  document.body.style.backgroundColor = randomColor;
  document.getElementById('tags').style.color = randomColor;
}


// - Randomly selects a quote by generating a random number and returning
//   the quote with the matching index value.
function getRandomQuote() {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
};


// - Creates variable to hold the value of the getRandomQuote function.
// - Creates a variable to hold the quote box element.
// - Accesses the keys of the selected object to populate their values
//   and formulate the text that will be displayed on the page.
// - Adds to the quote based on the availability of optional information keys.
// - Updates the inner html of quote box and tag list to change the info displayed on page.
// - Changes the pages background, button, and tag text color.
// - Resets the interval timer
function printQuote() {
  var chosenQuote = getRandomQuote();
  var quoteBox = document.getElementById('quote-box');
  var tagList = document.getElementById('tags');
  var list = `<p class="tags"><span class="tags">${chosenQuote.tag}</span></p>`;
  tagList.innerHTML = list;

  var message =
    `<p class="quote">${chosenQuote.quote}</p>
    <p class="source">${chosenQuote.source}
    <span class="profession">${chosenQuote.profession}</span>`;

  if (chosenQuote.citation) {
    message += `<span class="citation">${chosenQuote.citation}</span>`;
  }

  if (chosenQuote.year) {
    message += `<span class="year">${chosenQuote.year}</span>`;
  }

  message += "</p>";
  quoteBox.innerHTML = message;

  changeColor();

  window.clearInterval()

};

// - Sets a timer to change quotes if the button is not clicked within 20 seconds
window.setInterval(printQuote, 20000);
