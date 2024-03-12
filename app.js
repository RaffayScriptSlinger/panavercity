var course = prompt("Enter Your course");
if(course === "wma"){
    console.log("You are endrolled in wma");
}else{
    console.log("please input write course");
}

var age = +prompt("enter  Your Age");
if(age <= 18){
    console.log("You are eligible");
}
else  {
    console.log("You are not Eligible");
}

if(course === "wma" && age  <= 18 ){
    document.write("congrats You Are Eligible" + "<br>");
}else {
    document.write("sorry try again " + "<br>")
}


// Ecercise Number two

var mathsNumber = +prompt("Enter your Maths Number");
if (mathsNumber == "") {
    alert("Enter Please");
    mathsNumber = +prompt("Enter your Maths Number");
    if(mathsNumber == ""){
        alert("ENter Please")
    }
}



var urduNumber = +prompt("Enter your Urdu Number");


var computerNumber = +prompt("Enter your Computer Number");


var engNumber = +prompt("Enter your English Number");


var islamiatNumber = +prompt("Enter your Islamiat Number");


var physicsNumber = +prompt("Enter your Physics Number");



var totalNumber = (mathsNumber + urduNumber + computerNumber + engNumber + islamiatNumber + physicsNumber);

var entireNumber = 550 ;

alert("tatal Number is = "  + totalNumber);

alert("Your Percentage is " +  totalNumber / entireNumber * 100 );


document.write("Your Maths Number is"  + mathsNumber + "<br>" ) ;
document.write("your Urdu Number is" + urduNumber + "<br>");
document.write("your Islamiat Number is" + islamiatNumber + "<br>");
document.write("your computer Number is" + computerNumber + "<br>");
document.write("your English Number is" + engNumber + "<br>");
document.write("your Physics Number is" + physicsNumber + "<br>");

