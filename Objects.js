//object literals Def:Objects in the form of key value pair.
let sym = Symbol("Key1"); //Symbol variable declartion.
let userObj ={
    name : "abc",
    "full name":"abc xyz",
    [sym] : "My symbol",
    age : 36,
    location :"Nagpur",
    email : "abc@gmail.com",
    isLoggedIn : false,
    lastLoginDay : ["Monday","Friday"]
}

//accessing the object element.
// Method 1:
console.log(userObj.name);

// Method 2:
console.log(userObj["email"]);
console.log(userObj["full name"]);
console.log(userObj[sym]); // accessing symbol variable in object.
console.log(sym);

// changing object Data

userObj["email"] = "xyz@gmail.com";
console.log(userObj["email"]);
console.log(userObj);

//Freeze user
//Object.freeze(userObj);
userObj.email="abc@gmail.com";
console.log(userObj["email"]);

//Adding Function to object.
userObj.greeting = function(){
    console.log(`H!!! it's ${this.name}`);
}

console.log(userObj.greeting); //getting function referance.
console.log(userObj.greeting()); //execute function body
 