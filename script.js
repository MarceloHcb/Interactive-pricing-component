const value = document.querySelector("#value")
const range = document.querySelector("input")
const spann = document.getElementById("span")
const progressBar = document.getElementById("progressBar")
const bgCircle = document.querySelector(".bg-circle")

progressBar.style.width = "34px"

range.oninput = (()=>{
    const rangeValue = range.value     
    value.textContent = `$${rangeValue},00` 
    progressBar.style.width = rangeValue*2.1 + "px"      

})
spann.addEventListener("click",()=>{    
     spann.classList.toggle("bgClick") 
     bgCircle.classList.toggle("active") 
})

    
    


    


