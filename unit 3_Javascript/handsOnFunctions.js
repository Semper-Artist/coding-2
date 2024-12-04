// Discuss the anatomy of a function

// ()= curly brackets are called parameters
// this is the designated area for where we pass
// in data into the function definition
// parameter = just a placeholder for data

// data = data types

function profileBio(name, income, debt) {
   console.log("username: = " + name);
   console.log("my networth is:" + income);
   let totalValue = income - debt
   console.log("my networth is :" + totalValue);
}

//profileBio('William', 200000, 300000)

// Lesson on Conditional Statements
// Conditional statements are comprised of the
// 'IF' and 'ELSE' keywords. They allow us to
// make decisions in our functions based on the 
// data we receive.

function checkTVInventory(tvs){
    if(tvs > 0){
        console.log('TV is in stock!');
    }else{
        console.log('Sorry, out of stock');
    }
}

// checkTVInventory(50)










// Activity

// 1. Create a function that will take a number that
// is passed into the functions parameters and convert
// the number into minutes. For example, a value of 2
// should return to 120 minutes. a value of 3 should
// return 180 minutes, etc.

function doctorPay(hour){
       if(hour <= 24 ){
        console.log("You get normal pay day.");
      } else if (hour > 8 && hour < 16) {
        console.log("You qualify for overtime.");
      } else if (hour > 16 && hour < 24) {
        console.log("Your working way too hard.");
      } else if (hour > 24) {
        console.log("You need to go home.");
      }
   }
    
doctorPay(25)




function discount(item){
    if(itemPrice > 10.00){
        console.log(" you qualify for a 5% discount");
    }
    else if(itemPrice > 20.00){
        console.log("you qualify for a 10% discount.");
    } else if(itemPrice > 100.0){
        console.log("you qualify for a 25% discount.");
    } else {
      console.log("this item does not qualify for discount.");
    }

}







