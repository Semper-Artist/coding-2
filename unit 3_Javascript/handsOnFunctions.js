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

checkTVInventory(50)










// Activity

// 1. 