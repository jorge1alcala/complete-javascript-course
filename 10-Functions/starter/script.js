'use strict';
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    },
    
}
lufthansa.book(139, 'JOrge Alcala')
lufthansa.book(269, 'Jahaziel Alcala')
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
}

const book = lufthansa.book;

// Does not work
// book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Todd Wright')
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Line',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 583, 'Mary Cooper')


//Apply Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData)// no recomendado
console.log(swiss);

book.call(swiss, ...flightData)// se usa en javascript moderno este es recomendado.

///////////////////////////////////////
// Coding Challenge #1
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
    question: 'What is your favorite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    // 1. Create new method
    registerNewAnswer(){
        //1.1: get Answer
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(write option number)`))
        console.log(answer);

        //1.2: Register the answer
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;// this is a testing logic and good example for Short Circuiting

        //4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
        this.displayResults();
        this.displayResults('string');

    },
    //3. Create a method 'displayResults' which displays the poll results.
    displayResults(type = 'array'){
        if(type === 'array'){
            console.log(this.answers);
        }else if (type === 'string'){
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }

    }
    
}

//2. Call this method whenever the user clicks the "Answer poll" button.
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))
// poll.registerNewAnswer()

poll.displayResults.call( {answers: [5, 2, 3] }, 'string')
poll.displayResults.call( {answers: [1, 5, 3, 9, 6, 1] }, 'string')
poll.displayResults.call( {answers: [1, 5, 3, 9, 6, 1] })
//[5, 2, 3]
//[1, 5, 3, 9, 6, 1]