window.addEventListener('resize',redrawLayout)
function redrawLayout(){
    setTimeout(()=>{
        drawVp();
        placeAP();
    },450)
}