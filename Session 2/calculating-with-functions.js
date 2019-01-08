function zero() {
  if(typeof arguments[0] === 'undefined'){
    return 0;
  } else {
    return arguments[0](0);
  }
}

function one() {
  if(typeof arguments[0] === 'undefined'){
    return 1;
  } else {
    return arguments[0](1);
  }
}
function two() {
  if(typeof arguments[0] === 'undefined'){
    return 2;
  } else {
    return arguments[0](2);
  }
}
function three() {
  if(typeof arguments[0] === 'undefined'){
    return 3;
  } else {
    return arguments[0](3);
  }
}
function four() {
  if(typeof arguments[0] === 'undefined'){
    return 4;
  } else {
    return arguments[0](4);
  }
}
function five() {
  if(typeof arguments[0] === 'undefined'){
    return 5;
  } else {
    return arguments[0](5);
  }
}
function six() {
  if(typeof arguments[0] === 'undefined'){
    return 6;
  } else {
    return arguments[0](6);
  }
}
function seven() {
  if(typeof arguments[0] === 'undefined'){
    return 7;
  } else {
    return arguments[0](7);
  }
}
function eight() {
  if(typeof arguments[0] === 'undefined'){
    return 8;
  } else {
    return arguments[0](8);
  }
}
function nine()  {
  if(typeof arguments[0] === 'undefined'){
    return 9;
  } else {
    return arguments[0](9);
  }
}

function plus() {
  var a = arguments[0];
  return function(b) {
    return b+a;
  };
}
function minus() {
  var a = arguments[0];
  return function(b) {
    return b-a;
  };
}
function times() {
  var a = arguments[0];
  return function(b) {
    return b*a;
  };
}
function dividedBy() {
  var a = arguments[0];
  return function(b) {
    return Math.floor(b/a);
  };
}

