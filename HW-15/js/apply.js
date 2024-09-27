// TAsk 2
function getMin(...numb){
  return Math.min(...numb);
}
getMin(2,3,4,5,6,7,8,9,1);

var getMin2 = function(...numb2){
  return Math.min(...numb2);
}
getMin2(2,3,4,5,6,0,8,9,1);

var getMin3 = new Function("...numb3", "return Math.min(...numb3)");
getMin3(2,3,4,5,6,0,8,9,1);

var getMin4 = (...numb4) =>{
  return Math.min(...numb4);
}
getMin4(2,3,4,5,6,0,8,9,1);


// task 3


function buildPyramid(numbr){
  for(var a = 0; a <numbr; a++){
    var str = numbr*2;
    for(var i = 1; i <= str; i += 2) {
      var voice = (str-i*2)/2;
      var ride = '-';
      console.log(ride.repeat(voice)+Array(i).fill('*').join(' ')+ride.repeat(voice) );
    }
    return numbr;
  }
  }
  buildPyramid(7);
  
  var buildPiramid = function(numbr2){
  for(var a = 0; a <numbr2; a++){
    var str2 = numbr2*2;
    for(var i = 1; i <= str2; i += 2) {
      var voice2 = (str2-i*2)/2;
      var ride2 = '-';
      console.log(ride2.repeat(voice2)+Array(i).fill('*').join(' ')+ride2.repeat(voice2) );
    }
    return numbr2;
  }
  }
  buildPyramid2(7);
  
  var buildPyramid4 = (numbr4) =>{
  for(var a = 0; a <numbr4; a++){
    var str4 = numbr4*2;
    for(var i = 1; i <= str4; i += 2) {
      var voice4 = (str4-i*2)/2;
      var ride4 = '-';
      console.log(ride4.repeat(voice4)+Array(i).fill('*').join(' ')+ride4.repeat(voice4) );
    }
    return numbr4;
  }
  }
  buildPyramid4(7);

// task 4

function unsplit1(arr1){
  var result1 = [].concat(...arr1);
  console.log(result1);
}
unsplit1([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);

var unsplit2 = function(arr2){
   var result2 = [].concat(...arr2);
  console.log(result2);
}
unsplit2([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);

var unsplit3 = new Function("arr3", "var result3 = [].concat(...arr3)",
  "console.log(result3)");
unsplit3([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);

var unsplit4 = (arr4) => {
  var result4 = [].concat(...arr4);
  console.log(result4);
}
unsplit4([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);