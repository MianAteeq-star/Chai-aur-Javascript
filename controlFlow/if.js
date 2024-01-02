 const userLoggedIn = true
 
 const loggedInWithEmail= false
 const loggedInWithGoogle = true
 
 if (userLoggedIn || loggedInWithEmail && loggedInWithGoogle) {
    // console.log("welcom user ");
 }
 


 if (userLoggedIn && loggedInWithEmail || loggedInWithGoogle) {
    // console.log("welcome user");
    
 }

let marks = 41

if (marks == 40) {
    // console.log("passed");
}else if (marks> 40 || marks==60) {
    // console.log("you got B grade");
    
}else if (marks>=70) {
    // console.log("you got A grade");
    
}
else{
    // console.log("fail");
}







// const month = "feb"
// switch (month) {
//     case "jan": console.log("janurary");
        
//         break;
//     case "march": console.log("March");
        
//         break;
//     case "feb": console.log("janurary");
        
    
//     // case "feb": console.log("aor");
        
//         break;

//     default:
//         console.log("default");
//         break;
// }