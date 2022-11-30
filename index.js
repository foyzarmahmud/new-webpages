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

        // control statement

        // কিভাবে বড় সংখ্যা নির্নয় করবো

        let num1 = prompt("Enter Your First Number");
        let num2 = prompt("Enter Your Second Number");
        let num3 = prompt("Enter Your Third Number");

        if (num1 > num2 && num1 > num3){
                console.log("Number 1 is Biggest Number ! " + num1)
        }

        else if(num2 > num1 && num2 > num3){
                console.log("Number 2 is Biggest Number ! " + num2)
        }

        else {
            console.log("Number 3 is Biggest Number ! " + num3)
        }


