function partitionOn(pred, items) {
  var even = [];
  var odd = [];
  
  items.forEach(function(item){
    if(pred(item)){
      even.push(item);
    }else{
      odd.push(item);
    }
    
  
  });
  
  items.length = 0;
  items.push.apply(items,odd);
  items.push.apply(items,even);
  
  return odd.length;
}