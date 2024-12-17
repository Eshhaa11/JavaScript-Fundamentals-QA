//What will the following code output, and why?
//console.log(2 + "2");
//console.log(2 - "2");

//The output for console.log(2 + "2"); will be "22" because 
//the + operator is used.
// When one of the operands is a string, js converts the other operand to a string as well. So, 2 (a number) is converted to "2" (a string), and the result is the concatenation of the two strings: "22".
//and
//The output for console.log(2 - "2"); will be 0 because 
//In this case, the - operator is used. 
//The - operator does not perform string concatenation, instead it tries to convert both operands to numbers. The string "2" is converted to the number 2, and the operation becomes 2 - 2, which is 0.
