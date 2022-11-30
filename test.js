
// Control Statement

let num = 3;


if (num % 2 == 0){
    console.log("Even Number");
}

else{
    console.log("Odd Number")
}
// Problem Solving touch 1

// How can i do a letter grade calculator
// user marks Input
// A+ (80-100)
// A (70 - 79)
// A-(60-69)
// B(50-59)
// C(40-49)
// D(33-39)
// Fail

let marks = prompt("Enter Your Marks : ");

    if (marks >= 80 && marks <= 100){
        console.log("Your Letter Grade GPA A+");
    }

    else if (marks >= 70 && marks < 80){
        console.log("Your Letter Grade GPA A");
    }

    else if (marks >= 60 && marks < 70){
        console.log("Your Letter Grade GPA A-");
    }

    else if (marks >= 50 && marks < 60){
        console.log("Your Letter Grade GPA B");
    }

    else if (marks >= 40 && marks < 50){
        console.log("Your Letter Grade GPA C");
    }

    else if (marks >= 33 && marks < 40){
        console.log("Your Letter Grade GPA D");
    }


    else if(marks >= 0 && marks < 33){
        console.log("Fail!!")
    }
       
    
        else{
            console.log("Envalid Marks")
        }




  