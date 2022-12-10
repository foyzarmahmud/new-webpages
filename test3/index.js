// how to use break and contineu
for (let i = 1; i <= 100; i++){

    if(i === 12){
        continue;
    }
    document.write(" "+i)
}

document.write(" End");


// How to use ternery operetor 

let number = Number(prompt("Enter a Number : "));

if(number > 0 ){
    console.log("Positive")
}

else{
    console.log("Negative")
}

// if there are 2 condition available

let result = number > 0 ? "Positive" : "Negative";

console.log(result);

// many condition are ternery operetor use

let resultA = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";

console.log(resultA);