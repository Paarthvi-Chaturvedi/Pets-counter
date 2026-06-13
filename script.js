const increment= document.getElementById("increment")
const decrement= document.getElementById("decrement")
const petsEl = document.getElementById("pets-el")
const saveEl = document.getElementById("save-el")
const petsStay = document.getElementById("pets-stay")

count = 0

increment.addEventListener("click",function(){
    count +=1
    petsEl.textContent = count
})
decrement.addEventListener("click",function(){
    count -=1
    petsEl.textContent = count
    if(count <0){
        petsEl.textContent = 0
    }

})
 
saveEl.addEventListener("click", function(){
    let countStr = count + "-"
    petsStay.textContent += countStr
    petsEl.textContent = 0
    count = 0
})