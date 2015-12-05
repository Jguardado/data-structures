

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  //We can create new nodes by using keyword 'new' to create a new Graph object
  //addNode takes one parameter that is the name (and key) of the new node object. 
  this[node] = new Graph;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  //On current node use a for loop to travese the names of the keys. If name of the key found return true if not return false.
  
  //if sought value is undefined, return false

  for (var key in this){
    if (key === node){
      if (this[key] === undefined){
        return false;
      }
      else {
        return true;
      }

    //   return true;
    // } else if (this.key === undefined) {
    //   return false;
    }
    return false;
  }


};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  //on current node use a for loop to traverse the keys. If name of key found remove by setting value to undefined.
  //debugger;

  //set passed in key to undefined
  this[node] = undefined;



  // for (var key in this){
  //   if(key === node){
  //     key = undefined;
  //   }
  // }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  
  if(this[toNode] === toNode){
      return true;
    }
  else {
    return false;
  }

};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  // an edge is a property whose key is the value passed to
  this[fromNode] = fromNode;
  this[toNode] = toNode; 
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  this[fromNode] = undefined;
  this[toNode] = undefined;
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  _.each(this, cb);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */



