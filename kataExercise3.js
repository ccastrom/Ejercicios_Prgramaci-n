/**
 * There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
 */

var betterThanAverage= (classPoints,yourPoints)=>{
    var averageScore=0;
    classPoints.push(yourPoints);
    for (let i = 0; i < classPoints.length; i++) {
        averageScore += classPoints[i]/classPoints.length;
        
    }
    console.log(averageScore);

    

    //return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
    return averageScore<yourPoints? true:false;

    
}


console.log(betterThanAverage([3,6,6,5,7],6))

