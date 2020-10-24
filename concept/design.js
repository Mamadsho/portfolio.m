document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('.slider').addEventListener('touchmove',(evt)=>{
        document.querySelector('#vp').style.opacity='95%';
    })
    document.querySelector('.slider').addEventListener('touchend',(evt)=>{
        document.querySelector('#vp').style.opacity='100%';
    })
    
    let samplePageStyle=window.getComputedStyle(document.querySelector('.page'),null);
    let contStyle=window.getComputedStyle(document.querySelector('.container'),null);
    let aPgStyle=window.getComputedStyle(document.querySelector('.activePage'),null);
    const offsetWidth=2;
    const w= parseInt(samplePageStyle.width)+2*parseInt(samplePageStyle.marginLeft)+offsetWidth*2;
    const contTop=parseInt(contStyle.top)-parseInt(aPgStyle.borderTopWidth)-offsetWidth;
    const contLeft=parseInt(contStyle.marginLeft)-parseInt(aPgStyle.borderLeftWidth)-offsetWidth;

    aPg=document.querySelector('.activePage').style;
    aPg.left=contLeft;
    aPg.top=contTop;
    aPg.width=w;
    aPg.height=w;
})