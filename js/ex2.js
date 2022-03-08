console.log("HW 6 ex 2 -Display text from DOM");

//Display text for 400 level courses

const displayText400 = () => {
  const existingElements = Array.from(
    document.getElementsByClassName("400level")
  );
  //   let arrlen = existingElements.length;
  //  for (x=0; x<arrlen; ++x){
  //  console.log(existingElements[x].textContent);
  //}
  existingElements.forEach((class1) => {
    console.log(class1.textContent);
  });
};
displayText400();
