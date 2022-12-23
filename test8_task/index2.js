// Guessing Game 
// Guess a Number from 1 to 5
// Generate a random number between 1 to 5
// If the guess number matches random number ; then show message won else lost
// Run the game for 5 times 
// Show the number of wons and lost


    let won = 0;
    let lost = 0;

    for (let i = 1; i <=5 ; i++){
        let guessNumber = parseInt(prompt("Enter a Number between 1 to 5 : "));
        let randomNumber = Math.floor(Math.random() * 5) + 1;

        if(guessNumber === randomNumber){
            console.log("Yeah You are Win ! ");
            won++;
        }
        else{
            console.log("Sorry You have lost . Random Number was : "+randomNumber);   
            lost++;       
        }
    }

    document.write("Your Total Won Number : "+ won +"<br>");
    document.write("Your Total Lost Number : " + lost + "<br>");