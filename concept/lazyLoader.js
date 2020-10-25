function lazyLoad(pr,pg){
    page=data[pr][pg]
    console.log(page)
    if(page['type']=='html'){
        console.log('html');
        document.querySelector('#vp').innerHTML=page['inner'][lang]
    };
    if(page['type']=='image'){
        console.log('image')
    }
}
