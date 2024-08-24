
var primeFactor=number=>{

    let primesAndFactor=[];
    
    for (let factorIterator = 0; factorIterator <= number; factorIterator++) {
        var isFactor= number%factorIterator==0;
        let isPrime=true;
        //console.log(number+":"+factorIterator+"= "+isFactor);

        if(isFactor){
            //check if the factor number is prime
            //prime number are equals to 1 and itself
            for (let i = 2; i < factorIterator; i++) {
               
               if(factorIterator%i==0){
                isPrime=false;
                continue
               }
             
               
                
            }
        }

        if(isFactor && isPrime){
            primesAndFactor.push(factorIterator);
        }

       


    }
    return primesAndFactor.pop();

}

console.log(primeFactor(13125));
       