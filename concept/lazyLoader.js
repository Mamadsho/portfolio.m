function lazyLoad(pr,pg){
    let vp=document.querySelector('#vp');
    page=data[pr][pg]
    console.log(page)
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
        vp.style.backgroundImage=`url(${page['image']})`

    }
}
