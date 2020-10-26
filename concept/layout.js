document.addEventListener('DOMContentLoaded',()=>{
    
    let samplePageStyle=window.getComputedStyle(document.querySelector('.page'),null);
    let w= parseInt(samplePageStyle.width)+2*parseInt(samplePageStyle.marginLeft);
    let h= parseInt(samplePageStyle.height)+2*parseInt(samplePageStyle.marginTop);
    let container=document.querySelector('.container');
    
    container.style.width=Math.floor(window.innerWidth/w)*w;
    let ch=Math.floor(window.innerHeight/h)*h;
    container.style.height=ch;

    container.style.top=(window.innerHeight-ch)/2;

    vp=document.createElement('div');
    vp.id='vp';
    
    vp.style.width=Math.floor(window.innerWidth/w)*w-2*w;
    vp.style.height=ch-2*h;
    vp.style.marginLeft=w;
    vp.style.marginTop=h;
    vp.style.borderRadius=(w+h)/4+'px';
    vp.style.position='absolute';
    vp.style.zIndex=1;
    vp.style.overflow='scroll'
    container.insertBefore(vp,container.firstChild);
});