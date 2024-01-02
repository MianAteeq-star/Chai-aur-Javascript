
const email = "email@example.com";


if (email) {
    //console.log("got user emails");
}


let password = ""

if (password) {
    // console.log("got password");
}else{
    // console.log("donot get password");
}


let name =[]
if (name) {
    console.log("got name");
}
else{
    console.log("donot get name");
}


// Truthy Values:   [],{},function(){}, "kuch be",true

// Falsy Values:  "",0,-0, false, bigInt 0n, null , undefined ,NaN





// To check object is empty



const  myObj = {}


if (Object.keys(myObj).length === 0) {
    console.log("Object is empty");
}


// to Check Array is empty


const myArr= []

if (myArr.length==0) {
    console.log("Array is empty");
}