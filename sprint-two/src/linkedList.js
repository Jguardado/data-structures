var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;



  list.addToTail = function(value){
    //set value of node.next of current node to 
      //debugger;
      if(list.tail === null){
        list.head = new Node(value);
        list.tail = list.head;
      } else{

      var currentNode = list.tail;
      list.head.next = currentNode;
      list.tail = new Node(value);
      }
  };

  list.removeHead = function(){
    //Protect against negative values (size of list never below zero)
    var nextNode = list.head.next
    list.head = undefined;
    list.head = nextNode;    

  };

  list.contains = function(target){
  };

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
