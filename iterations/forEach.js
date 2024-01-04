const coding = ["js","ruby","python","java","cpp"]


coding.forEach((str,index,integer)=>{
    console.log(str,index,integer);
})




const mycoding = [
{
    languageName:"javascript",
    languageFileName:"js"
},
{
    languageName:"java",
    languageFileName:"java"
},
{
    languageName:"ruby",
    languageFileName:"rb"
},
]


mycoding.forEach((lang)=>{
console.log(lang.languageName);
console.log(lang.languageFileName);
})

// For Each Loop cannot return any value