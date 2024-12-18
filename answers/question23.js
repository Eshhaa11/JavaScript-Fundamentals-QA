//. What does the addEventListener method do? Write an example.

//The addEventListener method is used to attach an event handler to a specified element.
// It allows you to listen for specific events (like clicks, key presses, etc.) and execute a function when that event occurs.

const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Button was clicked!");
});