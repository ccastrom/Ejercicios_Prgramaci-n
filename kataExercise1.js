// Realizar la suma de números almacenados en un arreglo
function positiveSum(arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;


    //return arr.reduce((a,b)=>a+(b>0? b:0),0);




}



console.log(positiveSum([2,3,1,6]));