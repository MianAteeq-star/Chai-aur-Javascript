const button = document.querySelectorAll(".rounded-lg")

button.forEach((btn)=>{
    btn.addEventListener("click", function(e){
       if (e.target.id=== "red") {
        document.querySelector("body").style.backgroundColor = "red"
       }
       if (e.target.id=== "white") {
        document.querySelector("body").style.backgroundColor = "white"
       }
       if (e.target.id=== "indigo") {
        document.querySelector("body").style.backgroundColor = "indigo"
       }
       if (e.target.id=== "yellow") {
        document.querySelector("body").style.backgroundColor = "yellow"
       }
       if (e.target.id=== "black") {
        document.querySelector("body").style.backgroundColor = "black"
       }
       if (e.target.id=== "orange") {
        document.querySelector("body").style.backgroundColor = "orange"
       }
       if (e.target.id=== "blue") {
        document.querySelector("body").style.backgroundColor = "blue"
       }
       if (e.target.id=== "gray") {
        document.querySelector("body").style.backgroundColor = "gray"
       }
    })

})