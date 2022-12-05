// how to use for loop
 let sum = 0;

for(let x = 1; x <= 8 ; x++){
    sum = sum + x;
}

console.log("Result : " + sum );


for (let x = 1; x <= 100; x++){
    document.write("<h1>Fayzar Mahmud</h1>");
}

// How to use For In loop
// for in loop use for an object. because there are no index no on an object

const person = {
    fName : "Fayzar",
    lName : "Mahmud",
    home : "Dinajpur",
    age : 23
}

for (let x in person){
    console.log(x);
}

let math = 0;

for (let i = 1; i <= 6; i++){
    math = math + i;
}

console.log(math);

// how to loop in an object


const fayzarLive = {
    fName : "Fayzar",
    lName : "Mahmud",
    live : "Dinajpur",
    age : 23
}

for (let f in fayzarLive){
    console.log(f);
}

const loving = {
    first : "Protima",
    second: "SantiBazar",
    thired: "Banna",
    forth: "Farhana",
    fifth: "Selina"
}

for(let love in loving){
    console.log(love)
}