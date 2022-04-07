const value = document.querySelector("#value")
const range = document.querySelector("input")
const circle = document.querySelector(".circle")
const spann = document.getElementById("span")
const progressBar = document.getElementById("progressBar")
console.log(spann)
console.log(circle)
progressBar.style.width = "30px"

range.oninput = (()=>{
    const rangeValue = range.value
    value.textContent = `$${rangeValue},00` 
    progressBar.style.width = rangeValue*2 + "px"
})
spann.addEventListener("click",()=>{    
     spann.classList.toggle("bgClick")     
})

    
    


    


