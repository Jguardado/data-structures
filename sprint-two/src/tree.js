
//create Prototypal constructor function that creates instances of an object that are linked through the prototype chain to the treeMethods object
var Tree = function(value){
  //set instance of object to newtree variable
  var newTree = Object.create(treeMethods);
  //create a property 'value' on the and set it equal to teh value passed in to the function.
  newTree.value = value;
  //create a property children whihc is set to and empty array
  newTree.children = [];
  //create aproperty 'parent', which will represent the node that is above this object in teh tree chain. this property by default is set to null until changed
  newTree.parent = null;
  //spit out the object created
  return newTree;

};
//set treemethod to an empty object
var treeMethods = {};

//creates a method on the treeMethods object. This function creates a new node that is linked to the previous node by being stored in current nodes parent property and previous nodes children array(i.e. Parent/child)
treeMethods.addChild = function(value){
  //create temp variable the stores a new instance of object node
  var childTree = Tree(value);
  //telling it who its parent is..
  //assigning teh current instance to the previous instances parent propety
  childTree.parent = this;
  //pushing new instance into the previous instances children array
  this.children.push(childTree);

};

//create method on the treMethods object. This function traverese the tree to check if the target passed in is stored at each nodes value property.
treeMethods.contains = function(target){
  //debugger;

   //creating the recursive function that checks the value of the current position on the tree and if value doesnt match target calls itself on child object.
   var traverseChildren = function(currentChild){

    //checking to see if the propety value on current element is equal to target
    if(currentChild.value === target){
      //If is equal returns true 
      return true;
    }

    //create a temp variable to specfiy if teh current node has children  
    var hasChildren = true;
    
    //Base case is current child has no children.
    //checks to see if the children array is empty
    if(currentChild.children.length === 0){
    //if it is we change the temp variable to represent there are no children. If the varibale hasChildren is false the recursive function wont run
    hasChildren = false;

      //create array of siblings
      var siblingsArr = currentChild.parent.children;
      //for each sibling
      for (var i = 0; i < siblingsArr.length; i++){
        var sibling = currentChild.parent.children[i]; //sibling is an object
        //checks to see if the sibling has children
        if(sibling.children.length > 0){  //sibling.children is an array
          //if sibling has children change varibale to true.
          hasChildren = true;
        } else {
          //return the variable value
          return hasChildren;
        }
      }
      
    }

    //recursive function that continues to search through all the nested children
    //If the varibale hasChildren is false the recursive function wont run.
    //If has children is true
    if (hasChildren) {
      //we iterate through the children array
        for (var i = 0; i < currentChild.children.length; i++){
          //add apply our recursive function to each child (node)
          return traverseChildren(currentChild.children[i]);
        }
      }
   }
//returns whether or not the value was located in the tree
return traverseChildren(this);
};



/*
* Complexity: What is the time complexity of the above functions?
*/
