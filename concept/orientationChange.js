screen.orientation.addEventListener('change',(e)=>{
    setTimeout(()=>{
        drawVp();
        placeAP();
    },220)
    
})