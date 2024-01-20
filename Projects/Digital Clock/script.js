const time = new Date().toLocaleTimeString()
console.log(time);


setInterval(function(e){
    const time = new Date().toLocaleTimeString()
    console.log(time);
    document.querySelector("#time").innerHTML= time
},1000)