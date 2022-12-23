
// Task 8

    // things required - .variable, if-else, loop, functuion, array

    // One Dimensional Array
    // Create a function called highScore that will 
    // Receive a 1d array called scores,
    // return the highest score


    function highScore(scores){
       
        let max = scores[0];
        for(let i = 1; i < scores.length; i++){
            if(max < scores[i]){
                max = scores[i];
            }
        }
        return max;
    }
    const scores = [23,5,68,34,6,99,24,78,22];
    let maxScore = highScore(scores);
    console.log(maxScore);


  

