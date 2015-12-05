var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  // add property to set by storing item as value and item as key
  this[item] = item;
};

setPrototype.contains = function(item){
  //check key in set at passed in value for item
  if (this[item] === item){
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item){
  //assign undefined to key in set at passed in value for item
  this[item] = undefined;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
