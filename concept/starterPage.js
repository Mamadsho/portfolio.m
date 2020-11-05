function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        // seconds = seconds < 10 ? "0" + seconds : seconds;

        // display.textContent = minutes + ":" + seconds;
        display.textContent = seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}
function toggleElement(el){
    c1_bgColor=el.children[0].style.backgroundColor;
    c1_boxShadow=el.children[0].style.boxShadow;
    c2_bgColor=el.children[1].style.backgroundColor;
    c2_boxShadow=el.children[1].style.boxShadow;

    el.children[0].style.backgroundColor=c2_bgColor;
    el.children[0].style.boxShadow=c2_boxShadow;
    el.children[1].style.backgroundColor=c1_bgColor;
    el.children[1].style.boxShadow=c1_boxShadow;

}
function toggle_lang(){
    (lang!='ru')? lang='ru':lang='en';
    toggleElement(document.querySelector('#lang'))
}
function toggle_fs(){
    if (fs){
        document.exitFullscreen()
        fs=false;
    }else{
        document.body.requestFullscreen();
        fs=true;
    }
    toggleElement(document.querySelector('#fs'));
    redrawLayout();  
}
function letsGo(){
    drawVp();
    placeAP();
    lazyLoad('Home',0);
    document.querySelector('#goline').classList.add('gogogo');
    document.querySelector('.starter').classList.add('starterGo');
    setTimeout(()=>{
        document.querySelector('.starter').remove()
    },800)
}
document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('#logo_container').classList.add('logo_anim');
    document.querySelector('.menu').classList.add('menu_anim');
    document.querySelector('#goline').classList.add('menu_anim');
    startTimer(6,document.querySelector('.timer'));
    setTimeout(()=>{
        if(document.querySelector('.starter')) letsGo();
    },7000)
})