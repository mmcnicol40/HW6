console.log(" HW 6 ex 6 - create a mini dictionalry");

const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

//testing and providing visual map to DOM
console.log(document.body.childNodes);
console.log(document.getElementById("content"));

//added forloop to generate #s
let maxrows=3

for (x=0; x<maxrows; ++x) {
    const newElement = document.createElement("li"); 
    newElement.innerText = words[x].term;
    newElement.style.width = "80px";

    document.getElementById("content").insertBefore(newElement, document.getElementById(""));
}