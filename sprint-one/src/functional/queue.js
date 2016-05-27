var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storageArr = [];
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function (value) {
    storageArr.push(value);
    size = storageArr.length;

    // console.log(storageArr)
    for (var i = 0; i < storageArr.length; i++) {
      storage[i] = storageArr[i];
    }

    return storage;
  };

  someInstance.dequeue = function () {
    //   for(var i=0; i<storageArr.length; i++){
    //   storage[i] = storageArr[i];
    // }
    storageArr.shift();
    size = storageArr.length;
    return storage[0];
  };

  someInstance.size = function () {
    return size;
  };

  // console.log(storageArr)
  // for(var i=0; i<storageArr.length; i++){
  //   storage[i] = storageArr[i];
  // }
  // _.each(storageArr, function(val, index, list){
  // storage[index] = storageArr[index];
  // })
  return someInstance;
};
