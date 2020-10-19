
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
    let w=parseInt(this.dataset.packWidth) ;
    let l=-getTranslateX(this);

    this.style.transform=`translateX(${-(w+l%w)}px)`;
}
function repositionLoopY(tevt){
    let h=parseInt(this.dataset.packHeight) ;
    let t=-getTranslateY(this);

    this.style.transform=`translateY(${-(h+t%h)}px)`;
}


document.addEventListener('DOMContentLoaded',startup2)