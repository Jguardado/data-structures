var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.storageArr = [];
  obj.sizes = 0;

  // Implement the methods below
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
    this.storageArr.push(value);
    this.sizes = this.storageArr.length;

    // console.log(storageArr)
    for (var i = 0; i < this.storageArr.length; i++) {
      this.storage[i] = this.storageArr[i];
    }

    return this.storage;
  };

queueMethods.dequeue = function () {
  //   for(var i=0; i<storageArr.length; i++){
  //   storage[i] = storageArr[i];
  // }
  this.storageArr.shift();
  this.sizes = this.storageArr.length;
  return this.storage[0];
};

queueMethods.size = function () {
    return this.sizes;
  };
