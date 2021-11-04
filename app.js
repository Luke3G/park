var celsius = 12;
var farenheit = celsius * 1.8 + 32;

console.log(farenheit);


//right way//
let str1 = "Hello";
let str2 = "today is!" + new Date();
let str3 = " Have a nice day!";
console.log(`${str1} ${str2} ${str3} Tommoeeow is Hump Day. That is mid-week `);
//end of right way//
//start of monday 11 02//
function getAge(){
    var mes= prompt("what is your name?");
    alert(`Hello ${mes}`);
}

getAge();

function sayHello(){
    var message1= prompt("what is your name?")
    document.getElementById("demo-6").innerHTML= "Hello " + message1;
}

sayHello();

function toCelsius(f) {
    return (5/9) * (f-32);
}

document.getElementById("demo-0").innerHTML = toCelsius(77);
document.getElementById("demo-1").innerHTML = toCelsius(35);
document.getElementById("demo-2").innerHTML = toCelsius(20);

//reffernce for puppy dog calculator//
function calcCircumfrence(radius) {
    var y = (Math.PI * radius) * 2;
  console.log("The circumfrence is " + y + ".");
  }
  function calcArea(radius) {
    var x = (Math.PI * radius) * radius;
  console.log("The area is " + x + ".");
  }
  
  calcCircumfrence(30);
  calcArea(10);
  


  function calculateDogAge() {
    var myAge= document.getElementById('years').value;
    var dogAge = myAge * 7;
   
    document.getElementById('dog').innerHTML= dogAge + ' years old in human years.';
    
  }