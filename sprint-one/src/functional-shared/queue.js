var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // var count = 0;
  var size = 0;
  var storage = {};

// for (var key in storage){
  // count++;
// }
  var storageArr = [];

queueMethods.enqueue = function(value){
  storageArr.push(value);
  for (var i = 0; i < storageArr.length; i++){
    storage[i] = storageArr[i];
  }
  size = storageArr.length;
}

queueMethods.dequeue = function () {
  if(size > 0){

  storageArr.shift();
  size = storageArr.length;
  // var returnval = storage[0];
  // storage[0] = undefined;
  return storage[0];
  }
}

queueMethods.size = function(){
  return size;
}

  return queueMethods;
};

var queueMethods = {};


