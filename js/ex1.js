console.log(" HW 6 ex 1 - Display Body Nodes");
/*
// run thru all childNodes and print via for loop
let arlen = document.body.childNodes.length;
for (let x = 0; x < arlen; x++) {
  console.log(document.body.childNodes[x]);
}
*/
let arlen2 = document.body.childNodes.length;

//Displays all nodes
const bodyNodes = (x) => {
  return document.body.childNodes[x];
};

for (let x = 0; x < arlen2; x++) {
console.log(bodyNodes(x)); 
}
 