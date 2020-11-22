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
    infinitize();
    applyPhysics();
    applyPositioning();
    drawVp();
    placeAP();
    lazyLoad('Home',0);
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
    setTimeout(()=>{
        if(document.querySelector('.starter')) letsGo();
        document.body.addEventListener('touchend', remove_hints)
    },2500)
})
function remove_hints(){
    document.querySelector('#hints').remove();
    document.body.removeEventListener('touchend',remove_hints);
}