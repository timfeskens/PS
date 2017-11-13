function askQuestions() {
    var person = prompt("Hi, what's your name?");
    var pizza = prompt("Also, what's your favorite kind of pizza?");
    var pet = prompt("Lastly, do you like dogs or cats?");
    alert(person + ",\n \nyour favorite pizza is " + pizza + "\nand you like " + pet);
}
askQuestions();