
function startup2(env){
    document.querySelectorAll(".project").forEach((p)=>{
        setupX(p);
    })
    setupY(document.querySelector('.slider'));

    document.querySelectorAll(".project").forEach((p)=>{
        p.addEventListener('touchend',repositionLoopX);
    })
    document.querySelector('.slider').addEventListener('touchend',repositionLoopY);
}

function setupX(pr){
    let clone=pr.querySelector('.pack');
    pr.dataset.packSize=Math.ceil(document.querySelector('.container').offsetWidth/clone.offsetWidth);
    pr.dataset.packWidth=pr.dataset.packSize*clone.offsetWidth;
    clonePack(clone,pr,pr.dataset.packSize-1);
    clonePack(clone,pr,pr.dataset.packSize*3);
    pr.style.transform=`translateX(${-(pr.dataset.packWidth)}px)`;
}

function setupY(slider){
    let clone=document.querySelector('.projectPack');
    let packSize=Math.ceil(document.querySelector('.container').offsetHeight/clone.offsetHeight);
    let packHeight=packSize*clone.offsetHeight;
    slider.dataset.packHeight=packHeight;
    slider.dataset.packSize=packSize;
    clonePack(clone,slider,packSize-1);
    clonePack(clone,slider,packSize*3);
    slider.style.transform=`translateY(${-packHeight}px)`;
}

function clonePack(pack,pr,n){
    for (let index = 0; index < n; index++) {
        pr.appendChild(pack.cloneNode(true));    
    }
}

function repositionLoopX(tevt){
    
    // TIMEOUT is set for making it universal for click physics and drag physics
    // it should process AFTER positioning
    setTimeout(()=>{
        const index = [...document.querySelector('.slider').querySelectorAll('.project')].indexOf(this);
        const yLoop=document.querySelector('.slider').dataset.packSize*document.querySelector('.projectPack').querySelectorAll('.project').length;
        const i=index%yLoop;
        const comrades=[pByN(i),pByN(i+yLoop),pByN(i+2*yLoop),pByN(i+3*yLoop)];
        comrades.forEach(function(cmr){
            let w=parseInt(cmr.dataset.packWidth) ;
            let l=-getTranslateX(cmr);
            cmr.style.transform=`translateX(${-(w+l%w)}px)`;
        });
    },transitionDurationHC) //HARDCODE
    
    
}
function repositionLoopY(tevt){

    // TIMEOUT is set for making it universal for click physics and drag physics
    setTimeout(()=>{
        let h=parseInt(this.dataset.packHeight) ;
        let t=-getTranslateY(this);
        this.style.transform=`translateY(${-(h+t%h)}px)`;
    },transitionDurationHC) //HARDCODE
}


document.addEventListener('DOMContentLoaded',startup2)