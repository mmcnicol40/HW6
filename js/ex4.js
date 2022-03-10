console.log(" HW 6 ex 4 - adding a link");

//testing and providing visual map to DOM
console.log(document.body.childNodes);
console.log(document.getElementsByTagName("li"));

//for fun - just writing to screen to confirm I could do it.
const body = document.body;
const h4 = document.createElement("h4");
h4.innerHTML = "<h4> dog </h4>";
body.append(h4);

// create new COB link and insert inbetween two links (added ID=links to HTML - couldn't do any other way)
const newElement = document.createElement("li"); 
newElement.innerHTML = '<li> <a href="https://www.csulb.edu/college-of-business">College of Business</a></li>';
document.getElementById("links").insertBefore(newElement, document.getElementById(""));
