console.log(" playing around chap 6");

// Show the "Wonders from Antiquity" h2 element
console.log(document.body.childNodes[11].childNodes[1]);
console.log(document.body.childNodes[11].childNodes[3].textContent);
console.log(document.body.childNodes[11].childNodes[5].childNodes[3]);


// Get all h2 elements into an array
const titleElements = document.getElementsByTagName("h2");
const titleElementsh1 = document.getElementsByTagName("h1");

console.log(titleElements[0]);     // Show the first h2
console.log(titleElements[1]);     // Show the first h2
console.log(titleElements[2]);     // Show the first h2
console.log(titleElements[3]);     // Show the first h2
console.log(titleElements.length); // 4 (total number of h2 elements in the page)

console.log(titleElementsh1[0]);     // Show the first h1
console.log(titleElementsh1[1]);     // Show the first h1
console.log(titleElementsh1.length); // 2 (total number of h1 elements in the page)

// Show all elements that have the class "exists"
const existingElements = Array.from(document.getElementsByClassName("exists"));
existingElements.forEach(element => {
  console.log(element);
});
console.log(existingElements);

