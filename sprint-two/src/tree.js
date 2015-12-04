var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  
  // your code here
  newTree.children = [];  // fix me


  treeMethods.addChild = function(value){
    //debugger;
    var childTree = Tree(value);
    this.children.push(childTree);

  };

  treeMethods.contains = function(target){
    //debugger;
     var startPoint = newTree;
     var found = false;

     var traverseChildren = function(currentChild){
      if(startPoint === target){
        found = true;
      }

      if(currentChild.value === target){
        found = true;
      }  
      
      /* if(!currentChild.children){
        found = false;

      }*/
      if (currentChild.children) {
          for (var i = 0; i < currentChild.children.length; i++){
            return traverseChildren(currentChild.children[i]);
          }
        }
     }

  traverseChildren(startPoint);
  return found;
  };


  return newTree;
};

var treeMethods = {};

  // // your code here
  // newTree.children = null;  // fix me




/*
 * Complexity: What is the time complexity of the above functions?
 */
