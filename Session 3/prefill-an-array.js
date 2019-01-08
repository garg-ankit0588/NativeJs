function prefill(countValue, printValue) {
  var intCount = parseInt(countValue);
  var value = [];
  if(intCount>0 && Number.isInteger(intCount) && !intCount.toString().includes(".")){
  
    for(var i = 0; i<intCount; i++){
      value.push(printValue);
    }
    return value;
  }else{
    var ex = { name: 'TypeError', message: countValue + ' is invalid'};
    throw ex;
  }
}
