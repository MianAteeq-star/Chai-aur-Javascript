
// const arr = ["","","","","","","",]


// const arrayWithObject= [
//     {},
//     {},
//     {},
//     {},
// ]


const arr=[1,2,3,4,5,6,7,8]

for (const num of arr) {
    // console.log(num);
}


const greeting = "Hello World!"

for (const greet of greeting) {

    if (greet ==" ") {
        break
    }
    // console.log(greet);
}



// Maps

const mappig = new Map()

mappig.set("Pak", "Pakistan")
mappig.set("IN", "India")
mappig.set("Pak", "Pakistan")
// console.log(mappig);

for (const [map,value] of mappig) {
    // console.log(map + "=> " +value);
}


const gameObj={
    game1 : "Game 1",
    game2 : "Game 2",
    game3 : "Game 3",
    game4 : "Game 4",
}

for (const [game, value] of gameObj) {
    console.log(`${game} => ${value}`);
}



// For Off loop cannot work on objects