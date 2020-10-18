
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
    pr.style.left=-(pr.dataset.packWidth);
}

function clonePack(pack,pr,n){
    for (let index = 0; index < n; index++) {
        pr.appendChild(pack.cloneNode(true));    
    }
}

function repositionLoop(tevt){
    let w=parseInt(this.dataset.packWidth) ;
    let l=-parseInt(this.style.left);
    console.log(w,l,-(w+l%w))
    this.style.left=-(w+l%w);
}


document.addEventListener('DOMContentLoaded',startup2)