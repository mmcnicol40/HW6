console.log(" HW 6 ex 6 - create a mini dictionalry");

//array provided
const words = [
  {
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished",
  },
  {
    term: "Tautology",
    definition:
      "logical argument constructed in such a way that it is logically irrefutable",
  },
  {
    term: "Oxymoron",
    definition:
      "figure of speech that juxtaposes elements that appear to be contradictory",
  },
];

//testing and providing visual map to DOM
console.log(document.body.childNodes);
console.log(document.getElementById("content"));

//added forloop to generate #s
let maxrows = words.length;

for (x = 0; x < maxrows; ++x) {
  const newElement = document.createElement("dl");
  const newElement2 = document.createElement("dl");
  newElement.innerText = words[x].term;
  newElement2.innerText = words[x].definition;
  newElement.style.width = "80px";
  newElement2.style.textIndent = "30px";

  //switch to manage bolding of Term
  switch (x) {
    case 0:
      console.log("case 1", x);
      newElement.style.fontWeight = "bold";
      break;
    case 1:
      console.log("case 2", x);
      newElement.style.fontWeight = "bold";
      break;
    case 2:
      console.log("case 3", x);
      newElement.style.fontWeight = "bold";
      break;

    default:
  }
//inserting the term and definition (its a miracle I got this done :-)
  document
    .getElementById("content")
    .insertBefore(newElement, document.getElementById(""));
  document
    .getElementById("content")
    .insertBefore(newElement2, document.getElementById(""));
}
