
let circle = document.getElementById('circle');

document.addEventListener("mousemove", (e)=>{
  let x = e.clientX
  let y = e.clientY
  circle.style.left = x + "px"
  circle.style.top = y + "px"
})