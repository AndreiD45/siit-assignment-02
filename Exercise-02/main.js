console.log(`exercise 2`);


let maxNumber = []
let numbers = [];
for(i = 0; i < 5; i++){
    numbers[numbers.length] = prompt(`Input number ${numbers.length + 1}`);
    numbers[i] = Number(numbers[i]);
    if(maxNumber > numbers[i]){
        maxNumber = maxNumber;
    }else{
        maxNumber = numbers[i];
    }
}

console.log(numbers);
console.log(maxNumber);

alert(`The maximum value is ${maxNumber}`);

