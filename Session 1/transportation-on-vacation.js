function rentalCarCost(d) {
  var dayCost = 40;
  var totalCost;
  
  if(d>=3 && d<7){
    return totalCost = (d*dayCost) - 20;
  }
  
  if(d>=7){
    return totalCost = (d*dayCost) - 50;
  }
  
  return d*dayCost;
}