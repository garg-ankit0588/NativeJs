function createFunctions(n) {
  var callbacks = [];

  var func = function(i){ 
                return function(){ 
                  return i;
                }
              };

  for (var i=0; i<n; i++) {
       callbacks.push(func(i));
    }
  
    return callbacks;
}