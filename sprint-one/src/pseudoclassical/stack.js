var Stack = function() {
 // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //In the constructor function, adding properties to the newly constructed object
  this.storage = {};
  this.sizes = 0;

};

  //Creating a method of constructor function's property prototype
Stack.prototype.push = function(value){
  //Using the property sizes as the key to the object stored, assigning the argument passed in as value.
  this.storage[this.sizes] = value;
  //Incrementing the property sizes by 1
  this.sizes++;

}

  //Creating a method of constructor function's prototype
Stack.prototype.pop = function(){
  //Checking to see if the property sizes is greater than zero
  if(this.sizes > 0){
  //Decrement property sizes by 1
  this.sizes--;
  //Create a new variable that is equal to the object's value at the key of current "sizes"
  var returnVal = this.storage[this.sizes];
  //Reassigning the value of the object's value at the key of current "sizes" to undefined
  this.storage[this.sizes] = undefined;
  //Returning the newly created variable with the stored value
  return returnVal;
  }
}

  //Creating a method of constructor function's prototype
Stack.prototype.size = function(){
  //Returning the current value at property sizes
  return this.sizes;
}