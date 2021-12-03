function setup(){
  var foo = new p5.Speech(); // speech synthesis object
foo.speak('hi there'); // say something
}

function draw(){
  var foo = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
foo.onResult = showResult; // bind callback function to trigger when speech is recognized
foo.start(); // start listening
}

function showResult()
{
  console.log(foo.resultString); // log the result
}
