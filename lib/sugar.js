// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/
function size(object) {
  return Object.keys(object).length;
}
/*
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/



function min(object) {
  let currentMin;
  for (let key in object) {
    if (typeof currentMin === 'undefined') {
      currentMin = object[key];
    } else if (currentMin > object[key]) {
      currentMin = object[key];
    }
  }
  return currentMin;
}


/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {
  let currentMax;
  for (let key in object) {
    if (typeof currentMax === 'undefined') {
      currentMax = object[key];
    } else if (currentMax < object[key]) {
      currentMax = object[key];
    }
  }
  return currentMax;
}

/*
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.
*/
function clone(object) {
  return Object.create(object)
};


/*
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*///I want my function to loop through the keys in the object until it finds a match.
//When it does, I want it to return the value of that key.
//If no match found after full loop, I want my function to return "undefined".

function get(object, key) {
  // for (let key in object) {
  //   if (key !== object[key]) {
  //     return undefined;
  //   } else {
  return object[key];
  //   }
  // }
};
/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object, key) {
  return object.hasOwnProperty(key);
};

/*
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/
function sum(object) {
  let total = 0;
  for (let key in object) {
    if (typeof object[key] === 'number') {
      total += object[key];
    }
  }
  return total;
};

/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) {
  let invertedObject = {}
  for (let key in object) {
    invertedObject[object[key]] = key
  }
  return invertedObject;
}

/*
  This function reveives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/
//I want my function to loop through array of objects, and to loop through each object. With each new key within object within array, 
//I want it to add each new key within each object to a new object

function addAll(arr) {
  let mergedObject = {};
  arr.forEach(function (object) {
    for (let key in object) {
      const value = object[key];
      mergedObject[key] = value;
    }
  })
  return mergedObject;
};


// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. It receives an object and a matcher function. 
  It should test each value in the object against the matcher function and if a matching value is found, the value should be returned. 
  Otherwise, return null.
*/
function find(obj, matcherFunc) {
  for (let key in obj) {
    if (matcherFunc(obj[key])) {
      return obj[key]
    }
  }
  return null
}



/*
  This function allows you to test whether every value in an object matches a certain criteria. 
  For example, is every value greater than 100? The function receives an object and a tester function. 
  If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/
// Object.values returns an array that contains all the values whereas obj[key] would return the single value for the given key

function every(obj, matcherFunc) {
  for (let key in obj) {
    while (matcherFunc(obj[key])) {
      return true;
      i++;
    } return false;
  }
}

/*
  This function allows you to test whether some values in an object match a certain criteria. 
  For example, are at least some of the values greater than 100? The function receives an object and a tester function. 
  If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj, matcherFunc) {
  for (let key in obj) {
    if (matcherFunc(obj[key])) {
      return true
    } else {
      return false
    }
  }
 }

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
};

module.exports = setUpGlobalObject;
