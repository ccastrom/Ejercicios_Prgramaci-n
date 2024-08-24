var result=0;

for (let index = 0; index <1000; index++) {
   let numMultiplode3= index%3;
   let numMultiplode5= index%5;
   if(numMultiplode3==0 || numMultiplode5==0){
    var result= result+index;
    console.log(result);
   
   }
    
}