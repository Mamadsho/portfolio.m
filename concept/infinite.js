
function startup2(env){
    document.querySelectorAll(".project").forEach((p)=>{
        setup(p);
        p.addEventListener('touchend',repositionLoop);

    })
}

function setup(pr){
    clone=pr.querySelector('.pack');
    pr.dataset.packSize=Math.ceil(document.querySelector('.container').offsetWidth/clone.offsetWidth);
    pr.dataset.packWidth=pr.dataset.packSize*clone.offsetWidth;
    clonePack(clone,pr,pr.dataset.packSize-1);
    clonePack(clone,pr,pr.dataset.packSize*3);
    pr.style.transform=`translateX(${-(pr.dataset.packWidth)}px)`;
}

function clonePack(pack,pr,n){
    for (let index = 0; index < n; index++) {
        pr.appendChild(pack.cloneNode(true));    
    }
}

function repositionLoop(tevt){
    let w=parseInt(this.dataset.packWidth) ;
    let l=-getTranslateX(this);

    this.style.transform=`translateX(${-(w+l%w)}px)`;
}


document.addEventListener('DOMContentLoaded',startup2)