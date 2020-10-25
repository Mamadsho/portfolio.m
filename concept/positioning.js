document.addEventListener('DOMContentLoaded',(a)=>{
    document.querySelectorAll('.project').forEach((pr)=>{
        pr.addEventListener('touchend',()=>{
            let l= getTranslateX(pr);
            let samplePageStyle=window.getComputedStyle(pr.querySelector('.page'),null);
            let w= parseInt(samplePageStyle.width)+2*parseInt(samplePageStyle.marginLeft);
        
            const index = [...document.querySelector('.slider').querySelectorAll('.project')].indexOf(pr);
            const yLoop=document.querySelector('.slider').dataset.packSize*document.querySelector('.projectPack').querySelectorAll('.project').length;
            const i=index%yLoop;
            const comrades=[pByN(i),pByN(i+yLoop),pByN(i+2*yLoop),pByN(i+3*yLoop)];

            comrades.forEach(function (cmr){
                cmr.classList.add('moving');
                //--------MAIN POINT----------
                cmr.style.transform=`translateX(${Math.round(l/w)*w}px)`;
                setTimeout(() => {
                    cmr.classList.remove('moving');
                }, parseFloat(window.getComputedStyle(pr,null).transitionDuration)*1000);
            })

            
            
        })
    })
    document.querySelector('.slider').addEventListener('touchend',function(evt){
        
        let t= getTranslateY(this);
        let samplePageStyle=window.getComputedStyle(this.querySelector('.page'),null);
        let h= parseInt(samplePageStyle.height)+2*parseInt(samplePageStyle.marginTop);
        
        this.classList.add('moving')

        //---------MAIN POINT-------------
        this.style.transform=`translateY(${Math.round(t/h)*h}px)`;
        //---------END OF MAIN POINT-------    

        setTimeout(() => {
            this.classList.remove('moving');
        }, parseFloat(window.getComputedStyle(this,null).transitionDuration)*1000);
    })
})