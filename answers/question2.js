//How can you include JavaScript in an HTML file? (Write an example.)

//To include JavaScript into a html page, there are 3 ways.
// 1) Internal
// 2) External
// 3) Inline


//1) Internal: In this, you add <script> within the head or the body section in the html file.
//2) External: In this, you use the <script> alongside with the src in the head section
//3) Inline: In this, you use the "onclick" attribute directly within the html elements.

//Examples
//INLINE

    //<!DOCTYPE html>
   //<html>
  //<head>
    //<title>Inline Example</title>
 //</head>
 //<body>
    //<button onclick="alert('Hello!')">Click Me!</button>
//</body>
//</html>


//INTERNAL
    
    //<!DOCTYPE html>
  //<html>
//<head>
   // <title>Internal Example</title>
    //<script>
       // function showMessage() {
            //alert('Hi there!!');
        //}
    //</script>
//</head>
//<body>
    //<button onclick="showMessage()">Click Me!</button>
//</body>
//</html>


//EXTERNAL

   //<!DOCTYPE html>
//<html>
//<head>
    //<title>External Example</title>
    //<script src="script.js" defer></script>
//</head>
//<body>
    //<button id="myButton">Click Me!</button>
//</body>
//</html>

