var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  var size = 0;

  stackMethods.push = function(value){
    storage[size] = value;
    size++;
  };

  stackMethods.pop = function(){
    if(size > 0){
    size--;
    var returnVal = storage[size];
    storage[size] = undefined;
    return returnVal;
    }
  }

  stackMethods.size = function(){
    return size;
  }

  return stackMethods;
};

console.log(Stack.prototype);
var stackMethods = {};


