const button = document.querySelectorAll(".rounded-lg")

button.forEach((btn)=>{
    btn.addEventListener("click", function(e){
       if (e.target.id=== "red") {
        document.querySelector("body").style.backgroundColor = e.target.id
       }
       if (e.target.id=== "white") {
        document.querySelector("body").style.backgroundColor = e.target.id
       }
       if (e.target.id=== "indigo") {
        document.querySelector("body").style.backgroundColor = e.target.id
       }
       if (e.target.id=== "yellow") {
        document.querySelector("body").style.backgroundColor =  e.target.id
       }
       if (e.target.id=== "black") {
        document.querySelector("body").style.backgroundColor = e.target.id
       }
       if (e.target.id=== "orange") {
        document.querySelector("body").style.backgroundColor =  e.target.id
       }
       if (e.target.id=== "blue") {
        document.querySelector("body").style.backgroundColor  =e.target.id
       }
       if (e.target.id=== "gray") {
        document.querySelector("body").style.backgroundColor = e.target.id
       }
    })

})