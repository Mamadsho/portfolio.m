screen.orientation.addEventListener('change',(e)=>{
    alert('orientation changed',screen.orientation.angle)
    drawVp();
    placeAP();
})