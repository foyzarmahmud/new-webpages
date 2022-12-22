// how to use array
const num = new Array();

for (let i = 0; i < 5; i++){
    num[i] = parseInt(prompt("Enter a Number : "));
}

let sum = 0 ;

for(let i = 0; i < 5; i++){
    
    console.log(num[i]);
    sum = sum + num[i];
}
console.log("Sum = "+sum);