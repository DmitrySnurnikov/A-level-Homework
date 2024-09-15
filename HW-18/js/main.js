// Task 1

class CustomString{
  constructor(str){
    this.str = str;
    
  }
  reverse(){
    let newStr = '', i;
    for(i = this.str.length-1; i>=0; i--){
      newStr += this.str.charAt(i);
    }
    return newStr;
  }
  ucFirst(){
    
    if(!this.str) 
    return this.str;
    
    let First = this.str[0].toUpperCase() + this.str.slice(1);
  }
  ucWords(){
    
  var splits = this.str.split(" ");
  var stringItog = "";

  for (let i = 0; i < splits.length; i++) {
    let name = splits[i];
    let firstName = name.substring(0, 1).toUpperCase();
    let secondName = name.substring(1, name.length)
    stringItog += firstName + secondName + " ";
  }
  }
}

// Task 2

class Validator{
  constructor(email, domen, date, phone){
    this.email = email;
    this.domen = domen;
    this.date = date;
    this.phone = phone;
  }
  checkIsEmail(){
    let subemail = "@";
    console.log(this.email.indexOf(subemail) !== -1);
  }
  checkIsDomain(){
    if (window.location.domen === "" || window.location.domen === "/") {
      return true
   }
  }
  checkIsDate(){
    let subDate = "//^\d/"
    console.log(this.date.indexOf(subDate) !== -1);
  }
  checkIsPhone(){
    let subphone = "+380"
    console.log(this.phone.indexOf(subphone) !== -1);
  }
}

