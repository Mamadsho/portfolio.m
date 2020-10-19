document.addEventListener('DOMContentLoaded',()=>{
    
    let samplePageStyle=window.getComputedStyle(document.querySelector('.page'),null);
    let w= parseInt(samplePageStyle.width)+2*parseInt(samplePageStyle.marginLeft);
    let h= parseInt(samplePageStyle.height)+2*parseInt(samplePageStyle.marginTop);
    let container=document.querySelector('.container');
    
    container.style.width=Math.floor(window.innerWidth/w)*w;
    let ch=Math.floor(window.innerHeight/h)*h;
    container.style.height=ch;

    container.style.top=(window.innerHeight-ch)/2;

});