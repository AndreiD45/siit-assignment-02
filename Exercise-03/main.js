console.log(`exercise-03`);


let div0 = [];
let div1 = [];
let div2 = [];
let userNrs = prompt(`How many values will you provide?`);
userNrs = Number(userNrs);

let userNr = [];
for (let i = 0; i < userNrs; i++) {
    userNr[i] = prompt(`input value ${i + 1}`);
    console.log(userNr);
}


for (let i = 0; i < userNrs; i++) {
    if(userNr[i] % 3 == 0){
        div0.push(userNr[i]);
    }if(userNr[i] % 3 == 1){
        div1.push(userNr[i]);
    }if(userNr[i] % 3 == 2){
        div2.push(userNr[i]);
    }
}


alert(`${div0.length} numbers that you provided have the remainder of division by 3 equal to 0`);
alert(`${div1.length} numbers that you provided have the remainder of division by 3 equal to 1`)
alert(`${div2.length} numbers that you provided have the remainder of division by 3 equal to 2`)