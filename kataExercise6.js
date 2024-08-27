/**
 * 
 * Estabas acampando con tus amigos lejos de casa, pero cuando es hora de regresar, 
 * te das cuenta de que tu combustible se está agotando y la gasolinera más cercana está a 80 kilómetros de distancia. 
 * Sabes que, en promedio, tu automóvil recorre unos 10 kilómetros por litro. 
 * Quedan 4 litros.
Considerando estos factores, escribe una función que te diga si es posible llegar a la gasolinera o no.
La función debe devolver true si es posible y false si no lo es.
 */

/** Data
 * int distanceToPump= 80 (km)
 * int litersPerKilometer=10 km
 * int remainingFuel=4 (L)
 */

var fuelCalculator=(distanceToPump,KilometerPerLiter,fueleft)=>{
    return (KilometerPerLiter*fueleft)/1 >= distanceToPump;
    


}

console.log(fuelCalculator(80,10,4));
