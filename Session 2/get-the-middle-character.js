function getMiddle(s){
  var arrString = Array.from(s);
  var middleChar = Math.floor(arrString.length/2);
  if(arrString.length === 1){
    return arrString[0];
  }
  
  if(arrString.length%2 === 1){
    return arrString[middleChar];
  } else{
    return arrString[middleChar - 1] + arrString[middleChar];
  }
  
}