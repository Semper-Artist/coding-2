


// 5~6 = masters degree
// 7 and up = doctorate

function educationTitle(gradeLevel){
    if(gradeLevel == 1){
        console.log("you are a freshmen in undergrad.");
    } else if (gradeLevel == 2){
        console.log("you are a sophomore in undergrad.");
    } else if (gradeLevel == 3) {
        console.log("you are a junior in undergrad.");
    } else if (gradeLevel == 4){
        console.log("you are a senior in undergrad.");
    } else if (gradeLevel == 5 ||  gradeLevel == 7) {
        console.log("you are in a masters program in undergrad.");
    } else if( gradeLevel >= 7 && gradeLevel <= 10){
        console.log("You are in doctorate school.")
    } else if (gradeLevel > 11){
        console.log("You need to leave and get a job. You've been in school too long.")
    } else {
        console.log("Err. Please check your code.");
    }
    
}
educationTitle();

// [] indicates a list

// A list is a unique grouping data type that allows
// use to collect and organize data in one variable.
// lists can contain virtually all data types simultaniously

var GroceryList=['name',10, true]

var student1 = ["Will", 90,"football"]
var student2 = ["Jaydin",92,"basketball"]
var student3 = ["marquese",80, "unknown"]

var codingClass6Period = [student1,student2,student3,'Will', 'Jaydin','Haleem', 'etc..']

console.log(codingClass6Period)

// find the item in the list at index 3, and 1
var groceryList = ['apple','water','milk','paper towels','dish soap']

// Index number starts at 0
// Index 3 represents dish soap.
// Index 1 represents water.