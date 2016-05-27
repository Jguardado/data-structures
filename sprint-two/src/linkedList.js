//

//Create constructor function
//Purely functional instantiation pattern
var LinkedList = function () {
  //create empty object list
  var list = {};

  //set property head, tail on list to null
  list.head = null;
  list.tail = null;

  //create method addToTail to list object; addTail takes one arg 'value'
  list.addToTail = function (value) {

    //check to see if value at tail is null
    if (list.tail === null) {
      //set value at property head to a new instance of Node constructor function; Use the value passed in through our addTail method as the value we pass in to our node contructor function.
      list.head = new Node(value);

      //set value at the property tail to equal the same as the current valu at the property head.
      list.tail = list.head;
    } else {
      //if current list is not empty
      //store current tail element in a temporary variable
      var oldTail = list.tail;

      //set the tail to point toward the new node
      list.tail = new Node(value);

      //and set the a new property 'next' on our previous object and direct it toward the the new node instance (new tail)
      oldTail.next = list.tail;
    }
  };

  //Set method on our list object that removes current head and replaces it with the object stored at the its 'next' property.
  list.removeHead = function () {
    //Protect against negative values (size of list never below zero)
    //storing the value at list head in temp variable for later output
    var outputHeadValue = list.head.value;

    //retrieving the object stored in next property
    var nextNode = list.head.next;

    //clearing the value stored at head
    //list.head = undefined;
    //and replacing it with teh object previously stored at next
    list.head = nextNode;
    //retunring our previously stored output variable
    return outputHeadValue;
  };

  //Set a method on our list object thats determines whether the value passed in as a argument is contained in the object as one of our object's properties
  list.contains = function (target) {
    //set a variable to represent the begining node of our search
    var startSearch = list.head;

    //Createing and internal function that operates as our recursive function to traverse the nodes in search of teh value passed in as target.
    var traverseNodes = function (currentNode) {
      //check if there are any further nodes. last node.
      if (currentNode.next === null) {
        //check if the current nodes value is what we are looking for
        if (currentNode.value === target) {
          //if it is we return true
          return true;
        }else {
          //if not we return false
          return false;
        }
      }

      //Check if the node we are on contains the value we're looking for
      if (currentNode.value === target) {
        // if it is we return true
        return true;

        //if not we search the next node
      } else {
        return traverseNodes(currentNode.next);
      }
    };

    //return to our contains function information retrieved from us beginning our traversal of the traverseNodes
    return traverseNodes(startSearch);
  }

  //returns our object from the Linkedlist constructor
  return list;
};

//create a constructor function that creates a new object (node)that has properties of value and next when invoked.
var Node = function (value) {
  //create instance object
  var node = {};

  //assign properties to instance object
  //value property is set to value passed in as argument (a value to store)
  node.value = value;

  //next property is for determining what the next object in the link is
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
