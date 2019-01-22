function add(n){
  var func = function(x){
    return add(n+x);
  };
  func.valueOf=function(){
    return n
  };
  return func;
}