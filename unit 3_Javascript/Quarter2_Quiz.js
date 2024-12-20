// 1. 
"A function is a set of instructions for the computer to compute."

// 2.
"A parameter is the name listed in a function definition, while the argument is the actual instruction."

// 3. 
"The if/else conditional statement sets up an argument to make one block of code become paramount to another given specific conditions."

// 4. 
"An integer data type deals with numbers or integers."

// 5.
"A boolean is a data type that tells if a statement or a block of code is true or false."

// 6.
"A comparison operator would be able to determine the age of a buyer, and compare that age to the age required to buy the game."

// 7.
"A logical operator can be used to determine that there is one correct code. If the security matches that code, they enter. If they enter the code wrong, they cannot."

// 8. 

function longOrShort(Pword){
    if(Pword > 10 ){
     console.log("This Password is too long.");
   } else if (Pword < 4) {
     console.log("This password is too short.");
   } else if (Pword >= 5 && Pword <= 10 ) {
     console.log("This password matches requirements.");
   } else{
    console.log('Sorry, an error occured. Check your code.')
   }
}
 
longOrShort(10)

// 9.

function incomeAfterTax(income,tax){
    if(income === "0.00 && 12000.00"){
      console.log("You are taxed by 13 percent of your income.");
      
      var incomeAfterTax = tax *.13;
      console.log(incomeAfterTax);
      var total = tax - incomeAfterTax;
      console.log(total);
    
    } else if(income == "12001.00 && 50000.00"){
      console.log("You are taxed by 15 percent of your income.");
    
      var incomeAfterTax = tax *.15;
      console.log(incomeAfterTax);
      var total = tax - incomeAfterTax;
      console.log(total);
    
    } else if(income == "50001.00 && 103000.00"){
      console.log("You are taxed for 25 percent of your income.");
    
      var incomeAfterTax = tax *.25;
      console.log(incomeAfterTax);
      var total = tax - incomeAfterTax;
      console.log(total);
    
    } else if(income = "103001.00 && 198000.00"){
      console.log("You are taxed for 26 percent of your income.");
      var incomeAfterTax = tax *.26;
      console.log(incomeAfterTax);
      var total = tax - incomeAfterTax;
      console.log(total);
    }
    
    }
    
     incomeAfterTax('12001.00 && 50000.00',30000);

     // 10.
     // DNF