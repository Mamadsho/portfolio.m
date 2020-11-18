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
function toggleElement(el,n){
    let activeButton=el.querySelector('.toggle_button_active');
    activeButton.classList.remove('toggle_button_active');
    el.children[n].classList.add('toggle_button_active');
}
function toggle_lang(){
    if (lang!='ru'){
        lang='ru';
        toggleElement(document.querySelector('#lang'),0);
    }else{
        lang='en';
        toggleElement(document.querySelector('#lang'),1);
    };
    reloadPage();  
}
function toggle_fs(){
    if (fs){
        document.exitFullscreen()
        // toggleElement(document.querySelector('#fs'),0);
        fs=false;
    }else{
        document.body.requestFullscreen();
        // toggleElement(document.querySelector('#fs'),0);
        fs=true;
    }
    reloadPage();  
}
function fs_load(){
    if(fs){
        document.querySelector('fs')
    }else{

    }
}
function letsGo(){
    drawVp();
    placeAP();
    lazyLoad('Home',0);
    // document.querySelector('#goline').classList.add('gogogo');
    document.querySelector('.starter').classList.add('starterGo');
    setTimeout(()=>{
        document.querySelector('.starter').remove();
        document.querySelector('#sliderHolder').classList.add('slide-in');
        setTimeout(()=>{
            document.querySelector('#vp').classList.add('showUp');
            document.querySelector('.activePage').classList.add('showUp');
            document.querySelector('#hints').classList.add('showUp');
        },1000)//HARDCODE
    },800)
}
document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('#logo_container').classList.add('logo_anim');
    // document.querySelector('.menu').classList.remove('hidden');
    // document.querySelector('#goline').classList.remove('hidden');
    // document.querySelector('.menu').classList.add('menu_anim');
    // document.querySelector('#goline').classList.add('menu_anim');
    // startTimer(6,document.querySelector('.timer'));
    setTimeout(()=>{
        if(document.querySelector('.starter')) letsGo();
        document.body.addEventListener('touchend', remove_hints)
    },4000)
})
function remove_hints(){
    document.querySelector('#hints').remove();
    document.body.removeEventListener('touchend',remove_hints);
}