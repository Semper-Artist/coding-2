// 1.

function negPos(Num){
    if(Num > 0 ){
     console.log("This number is positive: " + Num);
   } else if (Num < 0) {
     console.log("This number is negative: " + Num);
   } else if (Num == 0) {
     console.log("This is zero: " + Num);
   } else{
    console.log('Sorry, an error occured. Check your code.')
   }
}
 
// negPos(40)

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
     console.log("You are between the ages of 21-65, therefore your ticket price is $5.00.");
   }
}

 // ageToPrice(35)


 // 3.

 // KEY POINTS
 // Determine the price of the item based on the user's membership
 // superShopper = 10% discount on their items
 // megaShopper = 15% discount on their items
 // ultraShopper = 20% discount on their items
 // we need an item name, item price, membership and a message

 function discountFunction(membership, itemPrice){
console.log("Testing. Function works");
if(membership === "superShopper"){
  console.log("you are a super shopper. Here is your 10 percent discount!");
  
  var discountAmount = itemPrice *.1;
  console.log(discountAmount);
  var total = itemPrice - discountAmount;
  console.log(total);

} else if(membership == "megaShopper"){
  console.log("you are a mega shopper. Here is your 15 percent discount!");

  var discountAmount = itemPrice *.15;
  console.log(discountAmount);
  var total = itemPrice - discountAmount;
  console.log(total);

} else if(membership === "ultraShopper"){
  console.log("you are a ultra shopper. Here is your 20 percent discount!");

  var discountAmount = itemPrice *.2;
  console.log(discountAmount);
  var total = itemPrice - discountAmount;
  console.log(total);

} else{
  console.log("Error, Sorry this membership doesn't exsit.")
}

}

 discountFunction('megaShopper',200);