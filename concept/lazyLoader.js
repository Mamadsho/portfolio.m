function lazyLoad(pr,pg){
    let vp=document.querySelector('#vp');
    page=data[pr][pg]
    if(page['type']=='html'){
        console.log('html');
        let container=document.createElement('div');
        container.classList.add('html_container');
        container.innerHTML=page['inner'][lang];
        vp.innerHTML='';
        vp.style.backgroundImage='';
        vp.appendChild(container);
    };
    if(page['type']=='image'){
        vp.innerHTML='';
        let img=document.createElement('img');
        img.setAttribute('src',page['image']);
        img.classList.add('image_viewer');
        vp.appendChild(img);
        img.onload=function(){
            rv=vp.offsetWidth/vp.offsetHeight;
            ri=img.offsetWidth/img.offsetHeight;
            // ri=1.4367816091954022;
            if((rv-1)*(ri-1)>=0){
                if(rv>ri){
                    img.style.width=vp.offsetWidth;
                }else{
                    img.style.height=vp.offsetHeight;
                };
            }else{
                img.classList.add('img_rotate');
                if(rv<(1/ri)){
                    img.style.width=vp.offsetHeight;
                }else{
                    img.style.height=vp.offsetWidth;
                }
            };
        }   
    }
}
