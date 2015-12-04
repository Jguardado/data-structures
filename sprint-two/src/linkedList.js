var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;



  list.addToTail = function(value){
    //set value of node.next of current node to 
      if(list.tail === null){
        list.head = new Node(value);
        list.tail = list.head;
      } else{

      var oldTail = list.tail;
      list.tail = new Node(value);
      oldTail.next = list.tail;
      }
  };

  list.removeHead = function(){
    //Protect against negative values (size of list never below zero)
    var outputHeadValue = list.head.value;
    var nextNode = list.head.next
    list.head = undefined;
    list.head = nextNode;    
    return outputHeadValue;
  };

  list.contains = function(target){
  //debugger;
    var startSearch = list.head;

    var traverseNodes = function(currentNode){
        if (currentNode.next === null){
          if(currentNode.value === target){
            return true;
          }else{
            return false;
          }
        }
          
        if(currentNode.value === target){
          return true;
        } else {
          return traverseNodes(currentNode.next);
        }
    };

   return traverseNodes(startSearch); 
  }


  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
