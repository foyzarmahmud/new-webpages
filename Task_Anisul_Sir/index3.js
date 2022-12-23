

        const arrayScores = [65, 78, 8, 9, 4, 56, 34,];

        function highestScore (scorePrint){
            
            let max = arrayScore[0];
            for(let i = 1; i < arrayScores.length; i++){
                if(max < arrayScore[i]){
                    max = arrayScore[i]
                }
            }
            return max;
        }
    let printFunction = highestScore(arrayScores);
    console.log(printFunction);