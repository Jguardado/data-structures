var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.sizes = 0;
   return obj;
};

var stackMethods= {};
console.log(stackMethods.prototype)
// stackMethods.prototype.push
  stackMethods.push = function(value){
    this.storage[this.sizes] = value;
    this.sizes++;
    // console.log(obj.sizes); 
  };

  stackMethods.pop = function(){
    if(this.sizes > 0){
    this.sizes--;
    var returnVal = this.storage[this.sizes];
    this.storage[this.sizes] = undefined;
    return returnVal;
    }
  }

  stackMethods.size = function(){
    return this.sizes;
  }
// // console.log(stackMethods);
// // console.log(Stack.prototype);

//   // return stackMethods;

// //Why are or prototype methods not making adjustments to our object?
