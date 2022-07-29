const quotes = [
    {
        id: 0,
        quote: "Life has no limitations, except the ones you make.",
        author: "Les Brown",
    },
    {
        id: 1,
        quote: "Life is a lively process of becoming.",
        author: "Gen. Douglas MacArthur",
    },
    {
        id: 2,
        quote:
            "Life is what happens while you are busy making other plans.",
        author: "John Lennon",
    },
    {
        id: 3,
        quote: "All great changes are preceded by chaos.",
        author: "Deepak Chopra",
    },
    {
        id: 4,
        quote: "Change alone is eternal, perpetual, immortal",
        author: "Arthur Shopenhauer",
    },
    {
        id: 5,
        quote: "By changing nothing, nothing changes.",
        author: "Tony Robbins",
    },
    {
        id: 6,
        quote: "Change is inevitable. Growth is optional.",
        author: "John C. Maxwell",
    },
    {
        id: 7,
        quote: "Change your thinking, change your life.",
        author: "Ernest Holmes",
    }]

const sentence = document.querySelector("#quote");
let chosenQuote = Math.round(Math.random() * quotes.length - 1);
sentence.innerHTML = `${quotes[chosenQuote].quote} - ${quotes[chosenQuote].author} -`;