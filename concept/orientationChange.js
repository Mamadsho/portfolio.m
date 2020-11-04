screen.orientation.addEventListener('change',redrawLayout)
function redrawLayout(){
    setTimeout(()=>{
        drawVp();
        placeAP();
    },450)
}