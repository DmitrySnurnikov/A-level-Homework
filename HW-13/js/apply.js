// padStart
function padStart(str, number, filler){
  var string = str;
  if(str.lenghr>number){
    return str;
  }
  else if(str.lenght<number){
    var boop = number - str.lenght;
  }
  for (var i in filler) {
    var char = filler[i];
    for (var j=0; j < boop; j++) {
      string += char;
    }
  }

  return string;

}
var result = padStart("adddamasl", 6, "1");
console.log(result);