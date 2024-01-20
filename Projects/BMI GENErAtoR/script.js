
const result = document.querySelector(".result")

const form = document.querySelector("form")
form.addEventListener("submit",function(e) {
    e.preventDefault()
    let height = parseInt(document.querySelector("#height").value)
    let weight = parseInt(document.querySelector("#weight").value)
    console.log(height);
    console.log(weight);
    if(height === 0 || height==="" || height ===   undefined || isNaN(height)){
        result.innerHTML="Please enter a valid height"
    }
    if(weight === 0|| weight==="" || weight ===   undefined || isNaN(weight)){
        result.innerHTML="Please enter a valid weight"
    }
    else {
        const bmi = (weight / ((height*height)/ 10000)).toFixed(2)
        console.log(bmi);
        if(bmi < 18.6){
            alert("Underweight")
        }
        else if(bmi >= 18.6 && bmi < 25){
            alert("Normal")
        }
        else if(bmi >= 25 && bmi < 30){
            alert("Overweight")
        }
        else if(bmi >= 30){
            alert("Obese")
        }
        result.innerHTML= bmi
    }

})

