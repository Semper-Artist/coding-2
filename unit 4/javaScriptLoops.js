


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