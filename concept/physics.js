var trajectoryLength=0;
var comrades=[];
var slider=document.querySelector('.slider');
var running=false;

function applyPhysics(){
    document.querySelectorAll(".project").forEach(applyProjectListeners);
    applySliderListeners(document.querySelector('.slider'));
}
function applySliderListeners(sl){
    sl.addEventListener('touchstart',tstartY);
    sl.addEventListener('touchmove',tmoveY);
    sl.addEventListener('touchend',tendY);
}
function redraw(){
    if(running){
        // X AXIS
        var changedX=curTouch.clientX-prevTouch.clientX;
        if (changedX)trajectoryLength+=Math.abs(changedX);//first time there's no prevTouch

        touchShiftL+=changedX;
        comrades.forEach(function (cmr){
            cmr.style.transform=`translateX(${touchStartL+touchShiftL+changedX}px)`;
        });

        // Y AXIS
        var changedY=curTouch.clientY-prevTouch.clientY;
        if (changedY)trajectoryLength+=Math.abs(changedY);//first time there's no prevTouch

        touchShiftT+=changedY;
        slider.style.transform=`translateY(${touchStartT+touchShiftT+changedY}px)`;

        //VARIABLES REASSIGNMENT
        prevTouch=curTouch;
    }
    requestAnimationFrame(redraw);
    console.log(running,changedX,changedY,prevTouch);
}
redraw();
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
    touchStartL=getTranslateX(this);
    touchShiftL=0;
    running=true;
    curTouch=tevt.touches[0];
    prevTouch=tevt.touches[0];
}
function tmoveX(tevt){
    curTouch=tevt.touches[0];
    // let changedX=tevt.touches[0].clientX-prevTouchX.clientX;
    // if (changedX)trajectoryLength+=Math.abs(changedX);//first time there's no prevTouch
    
    // let l=getTranslateX(this);
    // comrades.forEach(function (cmr){
    //     cmr.style.transform=`translateX(${l+changedX}px)`;
    // });

    // //VARIABLES REASSIGNMENT
    // prevTouchX=tevt.touches[0];
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
    prevTouch={};
    comrades=[];
    running=false;
}

function tstartY(tevt){
    touchStartT=getTranslateY(this);
    touchShiftT=0;
}

function tmoveY(tevt){
    // let changedY=tevt.touches[0].clientY-prevTouchY.clientY;
    // if (changedY)trajectoryLength+=Math.abs(changedY);//first time there's no prevTouch
    
    // let t=getTranslateY(this);
    // this.style.transform=`translateY(${t+changedY}px)`;

    // //VARIABLES REASSIGNMENT
    // prevTouchY=tevt.touches[0];
};
function tendY(tevt){
    
    //NULLING VARS
    //trajectoryLength=0; is nulled in positioning.js for click physX
};

// GLOBAL VARIABLES:
var curTouch={};
var prevTouch={};
var touchStartL=0;
var touchShiftL=0;
var touchStartT=0;
var touchShiftT=0;