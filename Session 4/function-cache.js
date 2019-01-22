function cache(func) {
  var data ={};
  return function(){
    var args = JSON.stringify(arguments);
    if(!(args in data)){
      data[args] = func(...arguments);
    }
    return data[args];
  }
}