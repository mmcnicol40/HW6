console.log(" HW 6 ex 5 - create a # table");

//testing and providing visual map to DOM
console.log(document.body.childNodes);
console.log(document.getElementsByTagName("li"));

//added forloop to generate #s
let maxrows=13

for (x=1; x<maxrows; ++x) {
    const newElement = document.createElement("li"); 
    newElement.style="text-align:center;border-style: solid;";
    newElement.innerHTML = x;
    newElement.style.width = "80px";
 
 //added if stmt to hilight #'s divisible by 4
    if (x % 4 === 0) {
    newElement.style.backgroundColor = "lightblue";
    }
    document.getElementById("output").insertBefore(newElement, document.getElementById(""));
}