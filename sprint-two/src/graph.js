

// ###Graph Solution
// Create a function that allows us to instantiate a new Graph
var Graph = function(){
  this.nodes = [];
};

// ------------------------
Graph.prototype.addNode = function(node){ 
  var newNode = {};
  //console.log(node);
  newNode.value = node;
  newNode.edges = [];

  this.nodes.push(newNode);
};

// ------------------------
Graph.prototype.contains = function(node){

  for (var i = 0; i < this.nodes.length; i++) {
    if(this.nodes[i].value === node){
      return true;
    }
  }  
  return false;


};

// ------------------------
Graph.prototype.removeNode = function(node){
 
  //debugger;
  for (var i = 0; i < this.nodes.length; i++) {

    if(this.nodes[i].value === node){
      if(this.nodes.length<=1){
      return this.nodes.pop();
      } else{
      //debugger
      //console.log('it is passing the conditional')
      this.nodes.splice(i, 1);//this should be removing the index passed in. Indicating that it should only remove one item.
      }
    }
  };


};

// ------------------------
Graph.prototype.hasEdge = function(node1, node2){

  //debugger
  for (var i = 0; i < this.nodes.length; i++) {
    if(this.nodes[i].value === node1){
      var firstNode = this.nodes[i];
    }
  }
  
  for (var j = 0; j < firstNode.edges.length; j++) {
    if (firstNode.edges[j] === node2){
      //debugger;
      return true;
    }
  }
  return false;
};

// ------------------------
Graph.prototype.addEdge = function(node1, node2){
  if(typeof node1 === "object"){
    var node1 = node1.value;
  }

  if(typeof node2 === "object"){
    var node2 = node2.value;
  }

  //debugger;
  for (var i = 0; i < this.nodes.length; i++) {
    if(this.nodes[i].value === node1){
      var firstNode = this.nodes[i];
      firstNode.edges.push(node2);
    }
  };  

  for (var j = 0; j < this.nodes.length; j++) {  
    if(this.nodes[j].value === node2){
      var secondNode = this.nodes[j];
      secondNode.edges.push(node1);
    }
  };

};

// ------------------------
Graph.prototype.removeEdge = function(node1, node2){
  //debugger
  for (var i = 0; i < this.nodes.length; i++) {
    if(this.nodes[i].value === node1){
      var firstNode = this.nodes[i];
    }
    if(this.nodes[i].value === node2){
      var secondNode = this.nodes[i];
    }
  }
  
  for (var j = 0; j < firstNode.edges.length; j++) {
    if (firstNode.edges[j] === node2){
      //debugger;
      firstNode.edges.splice(j, 1);
    }
    if (secondNode.edges[j] === node1){
      secondNode.edges.splice(j, 1);
    }
  }

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  //debugger
  
  for (var i = 0; i < this.nodes.length; i++) {
    //console.log(this.nodes[i])
    cb(this.nodes[i]);
  };

};

/*
 * Complexity: What is the time complexity of the above functions?
 */



