console.log(`exercise 2`);

let numbers = [];
for(i = 0; i < 5; i++){
    numbers[numbers.length] = prompt(`Input a number`);
    numbers[i] = Number(numbers[i]);
    console.log(numbers);
}

debugger;

let maxNumber;
for(i = 0; i < 4; i++){
    if(numbers[i] < maxNumber){
        maxNumber = maxNumber;
        console.log(maxNumber);
    }else{
        maxNumber = numbers[i];
        console.log(maxNumber);
    }
}