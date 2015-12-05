var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  
  // your code here
  newTree.children = [];  // fix me
  newTree.parent = null;

  //var startPoint = newTree; 
  return newTree;

};
//var firstTree = Tree();

var treeMethods = {};

treeMethods.addChild = function(value){
  //debugger;
  var childTree = Tree(value);
  childTree.parent = this;
  this.children.push(childTree);


  // var previousTree = newTree;
  // var childTree = Tree(value);
  // childTree.parent = previousTree;
  // this.children.push(childTree);

};

treeMethods.contains = function(target){
  //debugger;

  //creating a variable startTree and setting it to the instance of tree we have created as newTree
  //startPoint is the beginning point of the tree, where we will begin the recursive search.
   //var found = false;
    //var startPoint = this;

   //creating the recursive function that checks the value of the current position on the tree and if value doesnt match target calls itself on child object.
   var traverseChildren = function(currentChild){
   
    // if(startPoint.value === target){
    //   //found = true;
    //   return true;
    // }
    //checking to see is the propety value on current element is equal to target
    if(currentChild.value === target){
      //If is equal return true 
      return true;
      //found = true;
    }  
    var hasChildren = true;
    //debugger;
    //Base case is current child has no children.
    if(currentChild.children.length === 0){
    hasChildren = false;
      //create array of siblings
      var siblingsArr = currentChild.parent.children;
      //for each sibling
      for (var i = 0; i < siblingsArr.length; i++){
        //check to see if sibling has children
        var sibling = currentChild.parent.children[i]; //sibling is an object
        //create a variable that lets us know if there are any children in the current sibling base.
        if(sibling.children.length > 0){  //sibling.children is an array
          //if sibling has children change varibale to true.
          hasChildren = true;
        } else {
          return hasChildren;
        }
      }
      
    }

    //  if(!currentChild.children){
    //   return false;
    //   //found = false;

    // }

    //recursive function that continues to search through all the nested children
    if (hasChildren) {
        for (var i = 0; i < currentChild.children.length; i++){
          return traverseChildren(currentChild.children[i]);
        }
      }
   }

return traverseChildren(this);
//return found;
};

// // your code here
// newTree.children = null;  // fix me




/*
* Complexity: What is the time complexity of the above functions?
*/
