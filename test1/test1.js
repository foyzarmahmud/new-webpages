//  how to use for loop


for (let i = 1 ; i <= 100; i++){
    document.write("<h1>Fayzar Mahmud I Love You</h1>")
}


// যোগফল কিভাবে বের করে

// 1+2+3+4+...+9


// let sum = 0;

//         for (let x = 5; x <= 8; x++ ){
//             sum = sum + x;
//         }
//         console.log(sum);


        // input from user 

        let a = parseInt(prompt("Enter Your First Number : "));
        let b = parseInt(prompt("Enter Your Last Number : "));
        let sum = 0;
 

        for (let x = a; x <= b; x++){
            sum = sum + x; 
        }

        console.log(sum);



        // many times use a code in a loop


        for(let i = 1; i <= 6; i++){
            let num1 = parseInt(prompt("Enter Your First Number : "));
            let num2 = parseInt(prompt("Enter Your Last Number : "));
            let summ = num1 + num2;
            console.log("Result : " + summ);
        }

        