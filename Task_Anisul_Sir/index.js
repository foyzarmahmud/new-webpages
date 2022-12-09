// Task - 6 write a program that will print sum of all the numbers that are divisible by 3 and 5 from 1 - 100 


// Now use while loop


let i = 1;
let sum = 0;

while (i <= 100){
   
    if(i%3 === 0 && i%5 === 0 ){
        sum = sum + i;
        document.write(" "+i)
    }
   
    i++;
}

document.write(" End ")

// for loop use now

let sumA = 0;

for (let a = 1; a <= 100; a++){
    
    if (a % 3 === 0 && a % 5 === 0){
        sum = sum + a;
        document.write(" "+a);
    }                                              
}