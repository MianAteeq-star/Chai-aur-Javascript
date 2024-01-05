const arr = [1, 2, 3]



const newarr = arr.reduce((acc, curr) => {
    // console.log(` acc ${acc} and curr ${curr}`);
    return acc + curr
}, 0)
// const newarr = arr.map((num)=>{
//     return  num
// })

// console.log(newarr);


const shoppingCart = [
    {
        itemName: "js course",
        price: 1200

    },
    {
        itemName: "java course",
        price: 1500

    },
    {
        itemName: "m0bile course",
        price: 5000

    },
]

const totalPrice = shoppingCart.reduce((acc, price) => {
return acc + price.price
},0)

console.log(totalPrice);