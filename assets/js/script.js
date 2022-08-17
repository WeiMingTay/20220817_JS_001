document.getElementById("info").innerHTML="<h1>Hello World!</h1><h2>How are you?</h2>"
// document.getElementById("info").innerHTML="<h2>How are you?</h2>"
document.getElementById("container").innerHTML="<p>start of the element</p>"
document.write("<p>end of the element</p>")

//lev1_4

document.getElementById("test").innerHTML = "<h1>Hello h1<h1>";
const heute =new Date()
console.log(heute);

/* const date=new Date();
const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()]; */

function changeText() {
    let userInput = document.getElementById("userInput").value;
    document.getElementById("test2").innerHTML = userInput;
}