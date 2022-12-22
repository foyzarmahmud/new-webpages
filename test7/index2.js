// array - related method

// array - push(), pop(), shift(), unshift(), splice(), slice(), reverse(), sort()

const names = ["Fayzar", "Mahmud", "Anika", "Sathi", "Jerin"];
console.log(names);

names.push("Mitu");
console.log(names);
names.pop(); //pop started is ending;
console.log(names);
names.shift()   //shift is oposite of pop. shift started in begenign ;
console.log(names);

names.unshift("Faruk");
console.log(names);

names.splice(2,0, "Fayzar", "Mahmud", "Titir");
console.log(names);

names.sort();
console.log(names);

names.reverse();
console.log(names);

// how to sorting numberic array 

const number = [4, 56,2,6,2,9,64,7,1,];
console.log(number);
number.sort(function(a,b){
    return a-b;
});
console.log(number);
