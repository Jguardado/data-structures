var BinarySearchTree = function (value) {
  var obj = Object.create(BinarySearchTree.prototype);

  obj.left = null;
  obj.right = null;
  obj.value = value;
  var currentPosition = value;
  return obj;
};

//this needs to be the position of the first value passed in which is the start of the tree

//Insert value at correct location. We need to begin our recursive process at the start value.
//Once located we can traverse through the tree to
BinarySearchTree.prototype.insert = function (incomingValue) {

	if (incomingValue < this.value) {
    if (this.left !== null) {
      this.left.insert(incomingValue);
    } else {
      this.left = BinarySearchTree(incomingValue);
    }
  } else {
    if (this.right !== null) {
      this.right.insert(incomingValue);
    } else {
      this.right = BinarySearchTree(incomingValue);
    }
  }
};

BinarySearchTree.prototype.contains = function (target) {
  //debugger;
  var found = false;

  //console.log(this);

  var recursive = function (currentPosition) {

    if (currentPosition.value === target) {
      found = true;
      return found;
    }

    if (target < currentPosition.value && currentPosition.left !== null) {
      recursive(currentPosition.left);
    };

    if (target > currentPosition.value && currentPosition.right !== null) {
      recursive(currentPosition.right);
    };
  };

  recursive(this);
  return found;

};

BinarySearchTree.prototype.depthFirstLog = function (cb) {

  var start = this;

  var recurse = function (currentNode) {
    //if(currentNode.value)
    console.log('@', currentNode.value);
    cb(currentNode.value);

    //going right
    if (currentNode.right) {
      console.log('going right');
      recurse(currentNode.right);
    }

    //going left

    if (currentNode.left) {
      console.log('going left');
      recurse(currentNode.left);
    }

  };

  recurse(start);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
