function startup(evt){
    document.querySelectorAll(".project").forEach(applyProjectListeners);
    applySliderListeners(document.querySelector('.slider'));

    // DEBUG
    t=document.querySelector('.project')
}
function applySliderListeners(sl){
    sl.addEventListener('touchmove',tmoveY);
    sl.addEventListener('touchend',tendY);
}

function applyProjectListeners(el){
    el.addEventListener('touchmove',tmoveX);
    el.addEventListener('touchend',tendX);
}

function tmoveX(tevt){
    changedX=tevt.touches[0].clientX-prevTouchX.clientX;
    if(parseInt(this.style.left)){
        var l=parseInt(this.style.left);
    }else{
        var l=0;
    };
    this.style.left=l+changedX;

    //VARIABLES REASSIGNMENT
    prevTouchX=tevt.touches[0];
}

function tendX(tevt){
    //NULLING VARS
    changedX=0;
    prevTouchX={};
}

function tmoveY(tevt){
    changedY=tevt.touches[0].clientY-prevTouchY.clientY;
    if(parseInt(this.style.top)){
        var t=parseInt(this.style.top);
    }else{
        var t=0;
    };
    this.style.top=t+changedY;

    //VARIABLES REASSIGNMENT
    prevTouchY=tevt.touches[0];
};
function tendY(tevt){
    //NULLING VARS
    changedY=0;
    prevTouchY={};
};

// GLOBAL VARIABLES:
var prevTouchX={};
var prevTouchY={};
var changedX=0;
var changedY=0;

document.addEventListener("DOMContentLoaded",startup)