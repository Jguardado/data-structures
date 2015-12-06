

// ###Graph Solution

// Create a function that allows us to instantiate a new Graph
var Graph = function(){
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  //We can create new nodes by using keyword 'new' to create a new Graph object
  //addNode takes one parameter that is added to the current node as a property name with the value set as the new node object. 
  this[node] = new Graph;
};

// ------------------------
//create a method that filters through the current node to locate the node that is passed in as an argument
Graph.prototype.contains = function(node){
  
  //Since node names are also the property names we iterate through the current object check to see if the key matches the node
  for (var key in this){
    if (key === node){
      if (this[key] === undefined){
        //if sought value is undefined, return false
        return false;
      }
      else {
        return true;
      }
    }
    //if it doesnt find the key in the object we return false
    return false;
  }


};

// ------------------------
//Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  //on the current node use a for loop to traverse the keys. If name of key found remove by setting value to undefined.

  //set passed in key to undefined
  this[node] = undefined;

};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Passes in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  //
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
  //an edge is a property whose key is the value passed to or from and the value is the object
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
  //use underscore.js to apply and iterator to and a collection
  _.each(this, cb);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */



