var BinarySearchTree = function(value){
	var obj = Object.create(BinarySearchTree.prototype);

	obj.left = {};
	obj.right = {};
	obj.value = value;
	var currentPosition = value;
	return obj;
};
//this needs to be the position of the first value passed in which is the start of the tree

//Insert value at correct location. We need to begin our recursive process at the start value. 
//Once located we can traverse through the tree to 
BinarySearchTree.prototype.insert = function(incomingValue) {
	
	if(incomingValue < this.value){
		if(this.left.value){
			this.left.insert(incomingValue);
		} else {
		this.left = BinarySearchTree(incomingValue);
		}
	} else {
		if(this.right.value){
			this.right.insert(incomingValue);
		} else {
		this.right = BinarySearchTree(incomingValue);
		}
	}
};

BinarySearchTree.prototype.contains = function (incomingValue) {
	if (this.value === incomingValue){
		return true;
	}

	if(incomingValue < this.value){
		if(this.left.value){
			this.left.contains(incomingValue);
		}
	} else {
		if(this.right.value){
			this.right.contains(incomingValue);
		}
	}
	
	if(this.value === null){
		return false;
	}		
};


BinarySearchTree.prototype.depthFirstLog = function() {

}


/*
 * Complexity: What is the time complexity of the above functions?
 */
