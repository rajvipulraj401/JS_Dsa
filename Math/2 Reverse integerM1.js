

var reverse = function(x) {
 
    
let newNo = x.toString().split("").reverse().join("");
if(x<0){
  newNo =  newNo.toString().split("-").join("");
  newNo *=-1;
}


console.log(newNo);

return newNo;
}; 

reverse(123456789123);


/* Logic 
 -  I will be given a number and i have to reverse it . 



 Steps - (method 1 Brute Force)

 1) 

 
 Dry Run-

 */