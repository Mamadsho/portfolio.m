var trajectoryLength=0;
var comrades=[];

function applyPhysics(){
    document.querySelectorAll(".project").forEach(applyProjectListeners);
    applySliderListeners(document.querySelector('.slider'));
}
function applySliderListeners(sl){
    sl.addEventListener('touchmove',tmoveCY);
    sl.addEventListener('touchend',tendY);
}

function applyProjectListeners(el){
    el.addEventListener('touchstart',tstartX)
    el.addEventListener('touchmove',tmoveCX);
    el.addEventListener('touchend',tendX);
}
function tstartX(tevt){
    const index = [...document.querySelector('.slider').querySelectorAll('.project')].indexOf(this);
    const yLoop=document.querySelector('.slider').dataset.packSize*document.querySelector('.projectPack').querySelectorAll('.project').length;
    const i=index%yLoop;
    comrades=[pByN(i),pByN(i+yLoop),pByN(i+2*yLoop),pByN(i+3*yLoop)];
}
function tmoveCX(tevt){
    globx=tevt.touches[0].clientX;
    globt=this;
    console.log('mecalliug');
    requestAnimationFrame(tmoveX);
}
function tmoveX(){
    let changedX=globx-prevTouchX;
    if (changedX)trajectoryLength+=Math.abs(changedX);//first time there's no prevTouch
    
    let l=getTranslateX(globt);
    comrades.forEach(function (cmr){
        cmr.style.transform=`translateX(${l+changedX}px)`;
    });

    //VARIABLES REASSIGNMENT
    prevTouchX=globx;
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
function tmoveCY(tevt){
    globy=tevt.touches[0].clientY;
    globyt=this;
    console.log('meYcalliug');
    requestAnimationFrame(tmoveY);
}
function tmoveY(){
    let changedY=globy-prevTouchY;
    if (changedY)trajectoryLength+=Math.abs(changedY);//first time there's no prevTouch
    
    let t=getTranslateY(globyt);
    globyt.style.transform=`translateY(${t+changedY}px)`;

    //VARIABLES REASSIGNMENT
    prevTouchY=globy;
};
function tendY(tevt){
    
    //NULLING VARS
    //trajectoryLength=0; is nulled in positioning.js for click physX
    prevTouchY={};
};

// GLOBAL VARIABLES:
var prevTouchX={};
var prevTouchY={};
var globx=0;
var globt={};
var globy=0;
var globyt={};