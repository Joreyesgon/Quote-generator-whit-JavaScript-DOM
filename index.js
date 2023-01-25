let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: '"Be yourself; everyone else is already taken."',
    person: '"Oscar Wilde"'
}, {
    quote: '"Two things are infinite: the universe and human stupidity; and Im not sure about the universe."',
    person: '"Albert Einstein"'

}, {
    quote: '"Be the change that you wish to see in the world."',
    person: '"Mahatma Gandhi"'
}, {
    quote: 'If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals.',
    person: '"J.K. Rowling"'
}];

btn.addEventListener('click', () => {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})