var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sizes = 0;
  this.storage= {};
};

Stack.prototype.size = function(){
  return this.sizes
}
Stack.prototype.push = function(value){
  this.storage[this.sizes] = value;
  this.sizes++;
}
Stack.prototype.pop = function(){
  if(this.sizes > 0){
  this.sizes--;
  var returnVal = this.storage[this.sizes];
  this.storage[this.sizes] = undefined;
  return returnVal
  }
}

