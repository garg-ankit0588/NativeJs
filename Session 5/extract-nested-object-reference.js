Object.prototype.hash = function(string) {
  let arr = string.split('.');
  return arr.reduce((acc, val)=>{
    if(acc){
      return acc[val];
    }
  
  }, this)
}