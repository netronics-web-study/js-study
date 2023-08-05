const quotes = [
  {
    quote:
      "That man is best educated who knows the greatest number of things that are so, and who can do the greatest number of things to help and heal the world.",
    author: "Henry Ford",
  },
  {
    quote: "Education is preeminently a matter of quality, not amount",
    author: "Henry Ford",
  },
  {
    quote:
      "Any man can learn anything he will, but no man can teach except to those who want to learn.",
    author: "Henry Ford",
  },
  {
    quote:
      "The short successes that can be gained in a brief time and without difficulty, are not worth much.",
    author: "Henry Ford",
  },
  {
    quote:
      "Nothing can be made except by makers, nothing can be managed except by managers. Money cannot make anything and money cannot manage anything.",
    author: "Henry Ford",
  },
  {
    quote:
      "Two classes of people lose money; those who are too weak to guard what they have; those who win money by trick. They both lose in the end.",
    author: "Henry Ford",
  },
  {
    quote:
      "When people are 'stung' in false investment schemes there are three causes; greed of something for nothing; sheer inability to know their mind; or infantile trustfulness.",
    author: "Henry Ford",
  },
  {
    quote:
      "What right have you, save service to the world, to think that other men's labor should contribute to your gains?",
    author: "Henry Ford",
  },
  {
    quote:
      "The remains of the old must be decently laid away; the path of the new prepared. That is the difference between Revolution and Progress.",
    author: "Henry Ford",
  },
  {
    quote:
      "Most people think that faith means believing something; oftener it means trying something, giving it a chance to prove itself",
    author: "Henry Ford",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
