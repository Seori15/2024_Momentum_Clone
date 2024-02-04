const quotes = [
  {
    quote: "We're not together because we love, we're together to love more.",
    author: "<Up>",
  },
  {
    quote:
      "Every story in the world is beautiful, but our story is the most beautiful to me.",
    author: "<Up>",
  },
  {
    quote:
      "Fireworks are not the purpose. When you're ready to live your life, the last compartment is filled.",
    author: "<Soul>",
  },
  {
    quote: "I'll live all the time of my life.",
    author: "<Soul>",
  },
  {
    quote: "There are a lot of things to be happy about.",
    author: "<Inside Out>",
  },
  {
    quote: "Luck favors the prepared.",
    author: "<The Incredibles>",
  },
  {
    quote: "Remember me, each time you hear a sad guitar.",
    author: "<Coco>",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `from ${todaysQuote.author}`;
