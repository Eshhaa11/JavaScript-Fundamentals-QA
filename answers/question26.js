//How do you create an HTML element dynamically using JavaScript?

//You can create an HTML element dynamically using the document.createElement() method.

const newElement = document.createElement("div"); 
newElement.textContent = "This is a new div!";
document.body.appendChild(newElement); 
