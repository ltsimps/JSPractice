
var primeFactors = function( factor){
    var isPrimeFactor = true;
     for (var i = 2; i < factor;  i++){
       if( factor % i == 0){
           //factor a prime number
         isPrimeFactor = false; 
          break;
        }
       
      }
      
      return isPrimeFactor;
    }



var factors = function ( number ) { 
    var factors = [];
    for(var i = 0; i <=number/2; i++){
      if (number % i == 0) {
        factors.push(i);
      }
     }
    
     return factors; 
   
   }






var GenerateAaronPairs = function(numberOfPairs) {

    var x = 5; 
    var y = 6;
    var sequenceNumber = 0;
    var sequenceArray = [];
    while(sequenceArray.length < numberOfPairs){
     var xFactors = factors(x);
     var yFactors = factors(y);
     
     var xPrimeSum  = xFactors.filter(primeFactors).reduce(function (accumulator, currentValue) { return accumulator + currentValue;}, 0);
     var yPrimeSum  = yFactors.filter(primeFactors).reduce(function (accumulator, currentValue) { return accumulator + currentValue;}, 0);
     
     if( xPrimeSum == yPrimeSum && (x >= 2 && y >=2 )){
       sequenceArray.push({"x":x, "y":y});
     }
    x = x + 1;
    y = y + 1;
  }
  return sequenceArray;
}