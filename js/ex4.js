console.log(" HW  ex 4 - adding a link");
//console.log(document.body.childNodes);
//console.log(document.getElementsByTagName("li"));

const body = document.body;
const h4 = document.createElement("h4");
h4.innerHTML = "<h4> dog </h4>";
body.append(h4);

//const liElement = Array.from(document.querySelectorAll("li")); 
const liElement = document.getElementsByTagName("li"); 
const lib4 = document.getElementsByClassName("link");  
console.log(document.getElementsByClassName("link"))

console.log("liElement",liElement);
console.log("lib4",lib4);

const newlink = document.createElement("li");
newlink.textContent = "hello";
console.log("newlink",newlink);

//liElement.append(newlink, lib4);
liElement.insertBefore(newlink, lib4);


// stuff below from book
/*
const perlElement = document.createElement("h4"); // Create an "li" element
perlElement.id = "perl"; // Define element ID
perlElement.textContent = "Perl"; // Define its text content
// Insert the new element before the "PHP" node
//document.getElementById("languages").insertBefore(perlElement, document.getElementById("php"));
//document.getElementByTagName("h4").insertBefore(perlElement, document.getElementById("information systems"))

// asher homework example

// Modifying an HTML element: adding an <li>
document.getElementById("languages").innerHTML += '<li id="c">C</li>';

// Modify the title's text content
document.querySelector("h3").textContent += " for programming";
// Another way to get to the tag using the class (assume it's the first)
document.querySelector(".beginning").textContent += " more text";

// Test/modify class list
const titleElement = document.querySelector("h3"); // Grab the first h3
//titleElement.classList.remove("beginning");        // Remove the class "beginning"
titleElement.classList.add("title");               // Add a class called "title"
console.log(titleElement);
*/
