// Show a DOM object's child node
  // "node" is the DOM object
  // "index" is the index of the child node
  const showChild = (node, index) => {
    // TODO: add code here
    if (node.nodeType === document.ELEMENT_NODE) {
      if (index >= 0 && index < node.childNodes.length) {
        console.log(node.childNodes[index]);
      } else {
        console.error("Incorrect index");
      }
    } else {
      console.error("Wrong Node Type!");
    }
  };
  
    // Should show the h1 node
    showChild(document.body, 1);
  
    // Should show "Incorrect index"
    showChild(document.body, -1);
  
    // Should show "Incorrect index"
    showChild(document.body, 7);
  
    // Should show "Wrong node type"
    showChild(document.body.childNodes[0], 0);