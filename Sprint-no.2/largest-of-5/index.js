function makeRandomNumbers() {
    var numberarrray = [];

    for (i = 0; i <5; i++) {
      var randomnumber = Math.random();
      var completenumber = Math.floor(randomnumber  * 9) + 1;
  
      numberarrray.push(completenumber);
      
      document.getElementById('textbox').innerHTML = 'the numbers are ' + numberarrray;
      document.getElementById('textbox').innerHTML += '<br>and the highest number is ' + Math.max(...numberarrray);
    }
  }    