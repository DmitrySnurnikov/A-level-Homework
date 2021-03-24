// TAsk 1

var adder = function (){
  var res = 0;
  return function (x){
    res += x;
    return res;
  }
};

var sum = adder();
sum(5);
sum(6);

// Task 2
var getArray = function(){
  var value = [];
  
  return function(bie){
    if (bie === ""){
      value.splice(0,value.length); 
    }
    else{
    value.push(bie);
    return value;
    }
  }
}
var result = getArray();
result(1);
