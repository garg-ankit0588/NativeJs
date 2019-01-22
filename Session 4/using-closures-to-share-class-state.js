var Cat = (function () {
  var totalWeight = 0;
  var totalCat = 0;
  function Cat(name, weight){
    if(!name || !weight){
      throw Error();
      }
    totalWeight += weight;
    totalCat += 1;
    this.name = name;
    Object.defineProperty(this, "weight",{
     get : function(){
       return weight;
     },
     set : function(weight1){
        totalWeight -= weight;
        weight = weight1;
        totalWeight+=weight1;
     }
    });
  }
  Cat.averageWeight = function(){
      return totalWeight/totalCat;
    }
  return Cat;
}());