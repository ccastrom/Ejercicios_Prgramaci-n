/**If we list all the natural numbers below  that are multiples of 3 or 5 , we get  3,5,6 and 9
 *  The sum of these multiples is 23
 * 
 * Find the sum of all the multiples of 3 or 5 below 1000
 */

var result=0;

for (let index = 0; index <1000; index++) {
   let numMultiplode3= index%3;
   let numMultiplode5= index%5;
   if(numMultiplode3==0 || numMultiplode5==0){
    var result= result+index;
    console.log(result);
   
   }
    
}