


const randomColor = () => {
    
    let hexValue = '0123456789ABCDEF'
    let colorStart = '#'
    for(let i = 0; i < 6; i++){
colorStart += hexValue[Math.floor((Math.random() * 16))]
        console.log(colorStart);
    }
    return  colorStart;

}
let interval;

document.querySelector('#start').addEventListener('click', function(e){

   interval=  setInterval(function(){
       document.body.style.backgroundColor = randomColor();
   },1000)
})


document.querySelector('#stop').addEventListener('click', function(e){
    clearInterval(interval)
})