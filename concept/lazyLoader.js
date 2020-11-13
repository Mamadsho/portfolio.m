function lazyLoad(pr,pg){
    let vp=document.querySelector('#vp');
    page=data[pr][pg]
    if(page['type']=='html'){
        let container=document.createElement('div');
        container.classList.add('html_container');
        container.innerHTML=page['inner'][lang];
        vp.innerHTML='';
        vp.style.backgroundImage='';
        vp.appendChild(container);
    };
    if(page['type']=='settings'){
        let container=document.createElement('div');
        container.classList.add('html_container');
        container.innerHTML=`<h1>${(lang=='ru')?'Настройки':'Settings'}</h1><div class='itemlist'><div style='padding-bottom: 0;padding-top: 0;'><div class='itemkey'>${(lang=='ru')?'Язык':'Language'}</div><div class='itemvalue' style='background-color: inherit;padding: 0;'><div class='toggle_container' id='lang' onclick='toggle_lang()'><div class='toggle_button ${(lang=='ru')?'toggle_button_active':''}' style='background-image: url(\"ru.svg\")'></div><div class='toggle_button ${(lang=='en')?'toggle_button_active':''}' style='background-image: url(\"uk.svg\");'></div></div></div></div><div style='padding-bottom: 0;padding-top: 0;'><div class='itemkey'>${(lang=='ru')?'Полноэкранный режим':'Fullscreen'}</div><div class='itemvalue' style='background-color: inherit;padding: 0;'><div class='toggle_container' id='fs' onclick='toggle_fs()'><div class='toggle_button ${(fs)?'':'toggle_button_active'}' style='background-image: url(\"fs_off.svg\")'></div><div class='toggle_button ${(fs)?'toggle_button_active':''}' style='background-image: url(\"fs_on.svg\");'></div></div></div></div></div>`;
        vp.innerHTML='';
        vp.style.backgroundImage='';
        vp.appendChild(container);
    };
    if(page['type']=='image'){
        vp.innerHTML='';

        //The Image
        let img_cont=document.createElement('div');
        img_cont.id='img_cont';
        let img=document.createElement('img');
        img.setAttribute('src',page['image']);
        img.classList.add('image_viewer');
        img_cont.appendChild(img);
        vp.appendChild(img_cont);

        //More Button
        let more_cont=document.createElement('div');
        more_cont.id='more_cont';
        let more=document.createElement('div');
        more.id='more';
        more_cont.appendChild(more);
        more_cont.onclick=function(){toggle_desc()};
        vp.appendChild(more_cont);

        //Description
        let desc_cont=document.createElement('div');
        desc_cont.id='desc_cont';
        let desc=document.createElement('div');
        desc.id='desc';
        desc.innerHTML=page['desc'][lang];
        desc_cont.appendChild(desc);
        vp.appendChild(desc_cont);


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

function toggle_desc(){
    let desc_cont=document.querySelector('#desc_cont');
    if (window.getComputedStyle(desc_cont).transform=='matrix(1, 0, 0, 1, 0, 0)'){
        desc_cont.style.transform='translateY(100%)';
    }else{
        desc_cont.style.transform='translateY(0%)';
    }
}
