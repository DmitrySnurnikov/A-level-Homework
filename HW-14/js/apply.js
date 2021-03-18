// TAsk 1

var str = prompt("Voice new text")
function trim(Str){
  var Str = str;
  if (Str == null){
    console.log(Str);
  }
    return Str.replace(/^\s+/g, '');
}
trim(str);

// task 3

var text = prompt("voice")
function strLowerCase(str) {
    let newStr = "";
    for(let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if(code >= 65 && code <= 90) {
            code += 32;
        } newStr += String.fromCharCode(code);
    } return newStr;
}
strLowerCase(text);


// task 4 - 5

function Emploee (id, name, surname, salary, workExpirience, isPrivileges, gender){
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.salary = salary;
  this.workExpirience = workExpirience;
  this.isPrivileges = isPrivileges;
  this.gender = gender;
  this.getFullName =surname + " " + name;
  if(workExpirience < 3 & salary<200){
    this.getSalaryRate = "low";
  }
  else if(3 <= workExpirience < 7 & salary > 4000 ){
     this.getSalaryRate = "modarate";
  }
  else(isPrivileges == true & workExpirience >= 7 & salary > 7000){
     this.getSalaryRate = "high";
  }
}
const employeeObj = new Emploee(0, 'Valeriy', 'Zhmishenko', 1000, 10, true, 'male');
console.log(employeeObj);


// Task 6 - calculate

var p = prompt("Enter value p");
var y = prompt("Enter value y");
function calculate(P,Y){
  var P = p;
  var Y = y;
  var K = Math.log(Math.pow(P, 2) + Math.pow(Y, 3)) + Math.exp(P);
  console.log(K);
  return K;
}
calculate(p,y);