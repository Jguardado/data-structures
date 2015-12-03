var Queue = function() {
   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //In constructor function assigning properties to created objects.
  this.storage = {};
  this.sizes = 0;
  this.storageArr = [];
};

//Adding function method to constructor function prototype property (which is an object).
Queue.prototype.enqueue = function(value){
  //Push the argument that is passed in into an Array. The native function push in is added as the last index in the array this maintains the ordered list
  this.storageArr.push(value);
  //Iterate through the array and assign key value pair to the storage object
  for (var i = 0; i < this.storageArr.length; i++){
    this.storage[i] = this.storageArr[i]
  }
  //Redefine the property value of 'sizes' to equal the current length of the newly modified array (storageArr)
  this.sizes = this.storageArr.length;
}
//Adding a function method to constructor function prototype property (which is an object).
Queue.prototype.dequeue = function(){
  //Use the native function shift to remove the value at the zero index of the current array.
  this.storageArr.shift();
  //redefine the property value of 'sizes' to equal the current length of the newly modified array (storageArr)
  this.sizes = this.storageArr.length;
  //return the oldest value stored in object. Because we assigned the index as the key, the oldest value is stored at the key 'zero' or 'index' zero.
  return this.storage[0]
}

Queue.prototype.size = function() {
  return this.sizes; 
}


