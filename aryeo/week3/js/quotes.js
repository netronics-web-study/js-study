const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "To Travel is to Live",
        author: "Hans Christian Andersen",
    },
    {
        quote: "Only a life lived for others is a life worthwhile.",
        author: "Albert Einstein",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "Never go on trips with anyone you do ntot love.",
        author: "Hemmingway",
    },
    {
        quote: "We wander for distraction, but we travel for fulfilment.",
        author: "Hilaire Belloc",
    },
    {
        quote: "Travel expands the mind and fills the gap.",
        author: "Sheda Savage",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

// Math.random(); // 0부터 1 사이의 랜덤한 숫자 표시(float로 표현)
// Math.round(number); // float형인 숫자를 반올림하여 integer로 표현
// Math.ceil(number); // float형인 숫자를 올림하여 integer로 표현
// Math.floor(number); // float형인 숫자를 내림하여 integer로 표현
// [Array].length  // Array의 길이 반환
