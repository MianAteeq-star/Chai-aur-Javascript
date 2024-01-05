const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((nums)=>{
//     return nums + 10
// })


const newNums=myNums.map((nums)=>{
    return nums + 10
})

// console.log(newNums);

// myNums.forEach((nums)=>{
// //  nums
//  console.log(nums);
// })



const myarr= myNums.map((num)= num * 10)  // implicit return 
.map((num)=>{
   return num -1    // explicit return
})
.filter((num)=> num > 14)

console.log(myarr);



// chaining  method  map map and filter