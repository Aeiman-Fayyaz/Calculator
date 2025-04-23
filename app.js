// Current Time
function time(params) {
    let time = new Date()
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    
    document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds}` 
}
setInterval(time, 500)

// Calculator 

// Input Blank string
let string = ""

// Buttons Access
let buttons = document.querySelectorAll(".btn-2")

// Input Field Access
let input = document.getElementsByTagName("input")

// Logic
Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener('click' , function(e){
        if(e.target.innerHTML == "="){
            string = eval(string)
            document.querySelector("input").value = string
        }
        else if(e.target.innerHTML == "AC"){
            string = ""
            document.querySelector("input").value = string
        }
        else{
            string = string  + e.target.innerHTML;
            document.querySelector('input').value = string
        }
    })
})
