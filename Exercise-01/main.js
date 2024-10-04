console.log(`exercise-01`);

const maxRandomNumber = 11;

let nr1 = Math.floor(Math.random() * maxRandomNumber);
console.log(nr1);

let nr2 = Math.floor(Math.random() * maxRandomNumber);
console.log(nr2);

let operationSign = Math.floor(Math.random() * 3);
console.log(operationSign);

if(operationSign === 0)
    operationSign = "+";
else if(operationSign === 1)
    operationSign = "-";
else if(operationSign === 2)
    operationSign = "*";

// debugger;

let result;
if(operationSign === "+")
    result = nr1 + nr2;
else if(operationSign === "-")
    result = nr1 - nr2;
else
    result = nr1 * nr2;

let userNumber = prompt(`Please solve this operation: ${nr1} ${operationSign} ${nr2} =`);
userNumber = Number(userNumber);

let msg = userNumber === result ? 'Congrats! You guessed the number' : `Ow man! The corect answer was ${result}`;

alert(msg)
