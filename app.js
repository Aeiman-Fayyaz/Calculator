let btn = document.getElementById("btn")
console.log(btn);

btn.addEventListener("click" , function(){
    let display = document.getElementsByClassName("display")
    display.addEventListener("click" , function(){
        display.value = '' 
    })
    
})

