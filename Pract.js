// FIZZBUZZ PROBLEM

var output = [];
var count = 0;
function lol() {
    while (count < 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        }
        else if (count % 5 === 0) {
            output.push("Buzz");
        }
        else if (count % 3 === 0) {
            output.push("Fizz");
        }

        else {
            output.push(count);
        }
        count++;
    }
    console.log(output);
}

//WHO'S BUYING LUNCH PROBLEM

function input() {
    var name = [];
    var i=1;
    for (i = 1; i <= 5; i++) {
        var nam = prompt("Enter name " + i + " :");
        name.push(nam);
    }
    var a = Math.floor(Math.random() * 5);
    alert("Out of " + name + " , the person who's buying lunch is: " + name[a]);
}
input();

// BOTTLE OF BEERS PROBLEM

var i = 100;
while (i > 1) {
    console.log(i + " bottles of beer in the wall, " + i + " bottles of beer.");
    console.log("take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.");
    i--;
}
console.log("1 bottle of beer in the wall, 1 bottle of beer.");
console.log("take one down and pass it around, no more bottles of beer on the wall.");
console.log("no more bottles of beer in the wall, no more bottles of beer.");
console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");

// DOCUMENT OBJECT MANIPULATION
document.firstElementChild.lastElementChild.querySelector("h1").innerHTML="Hello";
document.firstElementChild.lastElementChild.querySelector("input").click();

getElementsByTagName("h1"); //or
document.querySelector("h1");         // Gives an array of all H1s

getElementsByClass("btn"); //or
document.querySelector(".btn");      // Gives an array of all elements under btn class

getElementById("title");  //or
document.querySelector("#title");       // Gives a single element with that ID

document.querySelector(".btn a"); //or
document.querySelector("a.btn");  // Gives li inside class btn

document.querySelector("li.btn");  // Gives only first li item inside class btn

document.querySelectorAll("li.btn");  // Gives array of all li item inside class btn

document.querySelectorAll("li.btn")[2].style.color="blue";  // Changes colour of third item in the array

document.querySelector("button").classList.add="inpt";  // adds another class inpt in button element
document.querySelector("button").classList.remove="inpt";  // removes class inpt in button element
document.querySelector("button").classList.toggle="inpt";  // add if removed and remove if added another class inpt in button element

document.querySelector("h1").innerHTML="<b>Yoi</b>";  // changes the html code inside h1 tag
document.querySelectorAll("h1").textContent="Yoi";  // changes the text inside h1 tag

document.querySelectorAll("a").attributes;  // shows the attributes of the anchor tag
document.querySelectorAll("a").getAttribute("href");  // shows the value of href attribute
document.querySelectorAll("a").setAttribute("href", "www.bing.com");  // changes the value of href attribute to www.bing.com

document.querySelector("a").addEventListener("click", function () {
    //statements
}); //anonymous function

var object1 = {
    name = "syed", //properties
    age  = "20",
    semester = "2"
}; // object declaration 
object1.name //called like this 

function ConstructorFunctionForObject1 (name,age,semester) { // constructor functions are named with capital letters.
    this.name = name;
    this.age = age;
    this.semester = semester;
    this.function1 = function () {
        //a function associated with an object is called a method
    }
}; 
var obj1 = new ConstructorFunctionForObject1 ("Syed",12,2); //creates a object using the constructor function which acts like a template for an object.
obj1.name; // will display syed
obj1.function1(); //will run the method function1

this.document.querySelector("button"); //  refers to the object it belongs to.

document.addEventListener("keypress",function(e) { //keypress is an event listener just like click which detects keyboard presses. We added a parameter to the anonymous function and used .key (property) to it, just to obtain which key was pressed. 
    var whichkey = e.key;
    alert(whichkey);
})