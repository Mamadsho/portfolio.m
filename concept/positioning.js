document.addEventListener('DOMContentLoaded',(a)=>{
    document.querySelectorAll('.project').forEach((pr)=>{
        pr.addEventListener('touchend',()=>{
            let l= getTranslateX(pr);
            let samplePageStyle=window.getComputedStyle(pr.querySelector('.page'),null);
            let w= parseInt(samplePageStyle.width)+2*parseInt(samplePageStyle.marginLeft);
            
            
            pr.classList.add('moving');
            //--------MAIN POINT----------
            pr.style.transform=`translateX(${Math.round(l/w)*w}px)`;
            setTimeout(() => {
                pr.classList.remove('moving');
            }, parseFloat(window.getComputedStyle(pr,null).transitionDuration)*1000);
        })
    })
    document.querySelector('.slider').addEventListener('touchend',function(evt){
        
        let t= getTranslateY(this);
        let samplePageStyle=window.getComputedStyle(this.querySelector('.page'),null);
        let h= parseInt(samplePageStyle.height)+2*parseInt(samplePageStyle.marginTop);
        
        this.classList.add('moving')
        //---------MAIN POINT--------
        this.style.transform=`translateY(${Math.round(t/h)*h})`;
        setTimeout(() => {
            this.classList.remove('moving');
        }, parseFloat(window.getComputedStyle(this,null).transitionDuration)*1000);
    })
})