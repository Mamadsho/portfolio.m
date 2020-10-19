document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('.slider').addEventListener('touchmove',(evt)=>{
        document.querySelector('#vp').style.opacity='90%';
    })
    document.querySelector('.slider').addEventListener('touchend',(evt)=>{
        document.querySelector('#vp').style.opacity='100%';
    })
})