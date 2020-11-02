screen.orientation.addEventListener('change',(e)=>{
    alert('orientation changed',screen.orientation.angle)
    drawVP();
    placeAP();
})