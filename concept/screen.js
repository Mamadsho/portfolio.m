screen.orientation.addEventListener('change',(e)=>{
    alert('orientation changed',screen.orientation.angle)
    setTimeout(()=>{
        alert('timeout over');
        drawVp();
        placeAP();
    },150)
    
})