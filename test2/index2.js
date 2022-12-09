// how to use for of and for in loop

let personNew = {
    fName : "Fayzar",
    lName : "Mahmud",
    age : 23,
    home : "Dinajpur"
}

for (let a in personNew){
    console.log(a)
}

// let number = [3,6,9,8,7];

// for (let x of number){
//     console.log(x)
// }

let okay = "Bangladesh";

for (let text of okay){

    console.log(text);
}


// how to use while loop
let sum = 0;

for (let sumM = 1; sumM <= 5; sumM++){
    sum = sum + sumM;
}
document.write(sum);

let sumN = 0;
let wSum = 1;

while(wSum <= 5){
    sumN = sumN + wSum;
    wSum ++;
}

document.write(sumN);

let lSum = 1;
let sumA = 0;

while(lSum <= 100){
    sumA = sumA + lSum;
    lSum ++;
}
document.write(sumA);
