let container = document.querySelector(".container")
let cursor = document.querySelector(".cursor")

container.addEventListener("mouseover", (event) =>{
   
    cursor.style.display = "block"
})

container.addEventListener("mousemove", (event) =>{
    console.log("mousemove", event)
    let x = event.offsetX
    let y = event.offsetY
    x -= cursor.offsetWidth/2
    y -= cursor.offsetHeight/2

    cursor.style.left = `${x}px`
    cursor.style.top = `${y}px`
})

container.addEventListener("mouseout", (event) =>{
    cursor.style.display = "none"
})
