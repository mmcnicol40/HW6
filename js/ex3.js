console.log("HW 6 ex 3 - update formatting of DOM");
console.log(document.body.childNodes);
console.log(document.getElementsByTagName("p"));

//load the paragraphs [p] into an array called paraElement
const paraElement = Array.from(document.getElementsByTagName("p"));
console.log(paraElement);

//for loop (oldschool - as i couldn't get forEach to work)
for (x = 0; x < 2; ++x) {
  console.log(paraElement[x]); //just used for testing
  paraElement[x].style.fontWeight = "bold";
  paraElement[x].style.backgroundColor = "yellow";
  paraElement[x].style.width = "300px";
}
