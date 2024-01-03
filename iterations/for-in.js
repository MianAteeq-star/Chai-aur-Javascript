const obj= {

    js:"javascript",
    swift:"swift",
    j:"java",
    rubby:"rubby",
    cpp :"c++"
}

for (const lang in obj) {
//    console.log( `${lang} is the  ${obj[lang]} ` );
//    console.log(lang);
}



const arr=["js", "python", "java", "cpp", ]


for (const array in arr) {
//   console.log(`${array}  is the index of ${arr[array]}` );
}



const mapping = new Map()

mapping.set("Pak", "Pakistan")
mapping.set("IN", "India")
mapping.set("Pak", "Pakistan")


for (const key in mapping) {
console.log(key);
}