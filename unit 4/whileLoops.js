// Loops - a programming construct
// that repeats a set of code instructions
// over and over until a specific condition
// is met.

// While Loops- this is a special type of loop
// that repeats code instructions over and over so long
// as a specific condition is TRUE.

// function basicLoop(){
// var x = 10
//while (x < 10){
  //  console.log('this code will repeat forever.');
   // value += 1
// }
// }
// basicLoop()
 // function welcome(){
  //  console.log('excellent you are using JS')
// }


function trafficLight(){
var lightColors = ['red','yellow','green'];
   var  timer = 0;
    while (timer < 60){
        console.log("this light is" + lightColors[0]);
        timer += 1;
    if (timer % 6){
      console.log("light is about to change");
      console.log("this light is" + lightColors[1]);
    }
  }
}
trafficLight();