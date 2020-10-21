document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('.slider').addEventListener('touchmove',(evt)=>{
        document.querySelector('#vp').style.opacity='90%';
    })
    document.querySelector('.slider').addEventListener('touchend',(evt)=>{
        document.querySelector('#vp').style.opacity='100%';
    })
    
    let samplePageStyle=window.getComputedStyle(document.querySelector('.page'),null);
    let contStyle=window.getComputedStyle(document.querySelector('.container'),null);
    const w= parseInt(samplePageStyle.width);
    const contTop=contStyle.top;
    const contLeft=contStyle.marginLeft;

    aPg=document.querySelector('.activePage').style;
    aPg.left=contLeft;
    aPg.top=contTop;
    aPg.borderRadius=w/2;
    aPg.width=w;
    aPg.height=w;
})