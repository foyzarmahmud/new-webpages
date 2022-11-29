// How to find vowels in my sentence :


const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O","U", "U"];

function countVowels (sentence){
    let count = 0;
    const letters = Array.from(sentence);

    letters.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    });
    return count;
} 

console.log(countVowels(prompt("Enter Your Sentence : ")));

// Vowel / Consonant

let letter = prompt("Enter a Letter : ");
    letter = letter.toLowerCase();

    if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u")
    console.log("Vowel");

    else
        console.log("Consonant");


