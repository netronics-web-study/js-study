const quotes = [
    {
        quote: "When you have faults, do not fear to abandon them.",
        author: "Confucius",
    },
    {
        quote: " Youth isn’t always all it’s touted to be.",
        author: "Lawana Blackwell",
    },
    {
        quote: "The goal of life is living in agreement with nature.",
        author: "Zeno",
    },
    {
        quote: " This too shall pass. ",
        author: "Et hoc transibit",
    },
    {
        quote: "All you need in this life is ignorance and confidence, then success is sure.",
        author: "Mark Twain",
    },
    {
        quote: "The two most important days in your life are the day you are born and the day you find out why.",
        author: "Mark Twain",
    },
    {
        quote: "Believe in yourself.",
        author: "Anonymous",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: " Anyone who has never made a mistake has never tried anything new.",
        author: "Albert Einstein",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

/*
Math.round(Math.random() * 10);
반올림
Math.ceil(Math.random() * 10);
올림
Math.floor(Math.random() * 10);
버림
*/
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
