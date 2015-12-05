var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //console.log(this._storage);

};


HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //Fetch a number using function stored at i;
  //Use LimitedArray.set to store a value and that value's index
    //debugger;
  
  // Check if there is a collision
    // Access hash table's stored value at index
    //Access hash table's property at the returned value

    // Check to see if value at this key "isSet"
  if(this[this[i]] === "isSet"){
    console.log("conditional works")
  }



  //Check if there is a value set already at this key position in storage obj
  
  









  // if(this[i] === isSet){  
  //   var newArr = [];
  //   newArr[0] = _storage[0]
  // }
  //using the keyword "this" assign to teh object a key and vlaue pair.
  //the key is passed in through our helpr function to produce a number index whihc is now used as i.
  this[i] = v;
  //we assign on the object the value provided as a parameter to be a key with its value set to 'isSet'
  this[v] = 'isSet'; 




};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  return this[i];

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  this[i] = null;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
