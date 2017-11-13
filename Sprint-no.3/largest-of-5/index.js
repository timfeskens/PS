function makeRandomNumbers() {
    // make the array
    var numberarrray = [];
    //fill the array until there are 5 numbers in it
    for (i = 0; i <5; i++) {
      // create a random number under 1
      var randomnumber = Math.random();
      // multiplies the number and keeps it between 1 and 10
      var completenumber = Math.floor(randomnumber  * 9) + 1;
      // pushes the number in the array
      numberarrray.push(completenumber);
      
      // fills the html with the data
      document.getElementById('textbox').innerHTML = 'the numbers are ' + numberarrray;
      document.getElementById('textbox').innerHTML += '<br>and the highest number is ' + Math.max(...numberarrray);
    }
  }    