var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.sizes = 0;
  this.storageArr = [];

};
  Queue.prototype.enqueue = function(value){
    this.storageArr.push(value);
    this.sizes = this.storageArr.length
    for(var i=0; i<this.storageArr.length; i++){
      this.storage[i] = this.storageArr[i]
    }
    return this.storage
  }
  Queue.prototype.dequeue = function(){
    if(this.sizes > 0){
    this.storageArr.shift();
    this.sizes = this.storageArr.length;
    }
    return this.storage[0]
  }
  Queue.prototype.size = function(){
    return this.sizes;
  }



