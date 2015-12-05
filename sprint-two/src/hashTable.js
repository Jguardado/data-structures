var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //console.log(this._storage);

};


HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  if(bucket === undefined){
    this._storage.set(i, [k, v])
  } else {
    bucket.push([k,v])
  }



};

//Our retrieve function takes in a value and looks for that value in our storage array.
HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  if(bucket.length === 1){
    return bucket[0][1];
  } else if {
    for (var j = 0; j < bucket.length; i++){

    }
  }
//Using the helper function get we return the value the at index in the storage array
return this._storage.get(i);

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  this[i] = null;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
