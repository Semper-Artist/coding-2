// 1.

function negPos(Num){
    if(Num == 8 ){
     console.log("This number is positive.");
   } else if (Num == -14) {
     console.log("This number is negative.");
   } else if (Num == 0) {
     console.log("This is zero.");
   }
}
 
// negPos(8)

// 2. 

function ageToPrice(age){
    if(age < 10){
     console.log("You are 10 or under the age of 16, therefore your ticket price is $5.00.");
   } 
    else if (age > 10 && age < 16) {
     console.log("You are between the ages of 11 - 16, therefore your ticket price is $10.00.");
   } 
    else if (age > 16 && age < 20 ) {
     console.log("You are between the ages of 17 - 20, therefore your ticket price is $15.00.");
   } 
    else if (age > 20 && age < 65) {
     console.log("You are between the ages of 21-65, therefore yout ticket price is $5.00.");
   }
}

ageToPrice(35)