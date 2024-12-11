// A Function is a set of instructions
// that informs the computer on what to do
// with data.

// Conditional statements use the if/ else
// keywords to allow us to create multiple
// custom outcomes based on the data
// we recieve

function timeOfDay(time) {
    if (time == "am") {
        console.log('it is the morning.');
    } else if (time == "pm") {
        console.log("it is the evening.");
    } else {
        console.log("sorry, cannot understand input.")
    }
}
// timeOfDay();


function gradeBook(grade) {
    if (grade == "90") {
        console.log("A");
    } else if (grade == "80") {
        console.log("B");
    } else {
        console.log("You have a C")
    }
}
gradeBook("90")