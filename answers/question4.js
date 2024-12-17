//What are the differences between var, let, and const?

//var: It is a  function/global scope, and can be re-assigned.
//let: It is a block scope, and can be re-assigned.
//const: It is a block scope, and cannot be re-assigned, and must be initialized.

////In Var and Let, you can re-assign the value but for Const you cannot.

//Examples
  //var:
      var name = "Esha";
      name = "Kripa";

  //let:
      let age = 18;
      age = 19;

  //const:
    const city = "New York";
    city = "Los Angeles";      
       //(This will throw an error since in const the values cannot be re-assign)
