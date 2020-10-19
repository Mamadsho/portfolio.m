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
    l=getTranslateX(this);
    
    const index = [...document.querySelector('.slider').querySelectorAll('.project')].indexOf(this);
    const yLoop=document.querySelector('.slider').dataset.packSize*document.querySelector('.projectPack').querySelectorAll('.project').length;
    const i=index%yLoop;
    const comrades=[pByN(i),pByN(i+yLoop),pByN(i+2*yLoop),pByN(i+3*yLoop)];
    comrades.forEach(function (cmr){
        cmr.style.transform=`translateX(${l+changedX}px)`;
    });

    //VARIABLES REASSIGNMENT
    prevTouchX=tevt.touches[0];
}

function pByN(n){
    return document.querySelector('.slider').querySelectorAll('.project')[n]
}
function getTranslateX(pr){
    var style=window.getComputedStyle(pr);
    var matrix=new WebKitCSSMatrix(style.transform);
    return(matrix.m41);
}
function getTranslateY(slider){
    var style=window.getComputedStyle(slider);
    var matrix=new WebKitCSSMatrix(style.transform);
    return(matrix.m42);
}


function tendX(tevt){
    //NULLING VARS
    changedX=0;
    prevTouchX={};
}

function tmoveY(tevt){
    changedY=tevt.touches[0].clientY-prevTouchY.clientY;
    t=getTranslateY(this);
    this.style.transform=`translateY(${t+changedY}px)`;

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