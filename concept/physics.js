var trajectoryLength=0;
var comrades=[];

function applyPhysics(){
    document.querySelectorAll(".project").forEach(applyProjectListeners);
    applySliderListeners(document.querySelector('.slider'));
}
function applySliderListeners(sl){
    sl.addEventListener('touchmove',tmoveY);
    sl.addEventListener('touchend',tendY);
}

function applyProjectListeners(el){
    el.addEventListener('touchstart',tstartX)
    el.addEventListener('touchmove',tmoveX);
    el.addEventListener('touchend',tendX);
}
function tstartX(tevt){
    const index = [...document.querySelector('.slider').querySelectorAll('.project')].indexOf(this);
    const yLoop=document.querySelector('.slider').dataset.packSize*document.querySelector('.projectPack').querySelectorAll('.project').length;
    const i=index%yLoop;
    comrades=[pByN(i),pByN(i+yLoop),pByN(i+2*yLoop),pByN(i+3*yLoop)];
}
function tmoveX(tevt){
    let changedX=tevt.touches[0].clientX-prevTouchX.clientX;
    if (changedX)trajectoryLength+=Math.abs(changedX);//first time there's no prevTouch
    
    let l=getTranslateX(this);
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
    //trajectoryLength=0; is nulled in positioning.js for click physX
    prevTouchX={};
    comrades=[];
}

function tmoveY(tevt){
    let changedY=tevt.touches[0].clientY-prevTouchY.clientY;
    if (changedY)trajectoryLength+=Math.abs(changedY);//first time there's no prevTouch
    
    let t=getTranslateY(this);
    this.style.transform=`translateY(${t+changedY}px)`;

    //VARIABLES REASSIGNMENT
    prevTouchY=tevt.touches[0];
};
function tendY(tevt){
    
    //NULLING VARS
    //trajectoryLength=0; is nulled in positioning.js for click physX
    prevTouchY={};
};

// GLOBAL VARIABLES:
var prevTouchX={};
var prevTouchY={};