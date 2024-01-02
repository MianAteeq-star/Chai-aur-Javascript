for (let i = 0; i <= 10; i++) {

//    console.log(i);
    
}


for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
    if (element ==2) {
        // console.log("found element 2");
        continue
    }
    
}


for (let i = 1; i <= 4; i++) {
    // console.log(`outerLoop ${i}`);
for (let j = 1; j <= 10; j++) {
    // console.log(`inner Loop ${j} and inner Loop ${i}`);
    if (j==3) {
        // console.log("3 is found");
        continue;
        
    }
    // console.log(i + ' * ' + j + " = "  + i*j);
    
}
    
}


let myArray = ["Mian","saab","superheros","flash"]
console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    if (element =="superheros") {
        break;
    }
    console.log(element);
    
}