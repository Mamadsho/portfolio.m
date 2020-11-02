// basically this script creates the viewport

document.addEventListener('DOMContentLoaded',drawVp,false);
function drawVp(){
    let samplePageStyle=window.getComputedStyle(document.querySelector('.page'),null);
    let w= parseInt(samplePageStyle.width)+2*parseInt(samplePageStyle.marginLeft);
    let h= parseInt(samplePageStyle.height)+2*parseInt(samplePageStyle.marginTop);
    let container=document.querySelector('.container');
    
    let cw=Math.floor(window.innerWidth/w)*w;
    container.style.width=cw;
    let ch=Math.floor(window.innerHeight/h)*h;
    container.style.height=ch;

    container.style.top=(window.innerHeight-ch)/2;
    if(document.querySelector('#vp')){
        var vp=document.querySelector('#vp');
    }else{
        var vp=document.createElement('div');
        vp.id='vp';
    }

    //LOADING CSV VPSIZE
    vpSizez={};
    vpsOut='';
    let vps=new XMLHttpRequest();
    vps.open('GET','vpSizes.csv',false);
    vps.onreadystatechange=(evt)=>{
        vpsOut=vps.responseText;
        vpSizez=CSVToArray(vpsOut);
    };
    vps.send();

    let miny,maxy;
    let l,t,r,b;

    [miny,maxy]=[Math.min(ch/h,cw/w),Math.max(ch/h,cw/w)];

    try{
        [l,t,r,b]=vpSizez[miny][maxy].match(/(.*),(.*),(.*),(.*)/).slice(1,5);
        if(cw>ch){
            [l,t,r,b]=[t,l,b,r];
        };
    }catch{
        [l,t,r,b]=[2,2,2,2]
    }
    //GIVEN ContW,ContH, ltrb

    console.log([l,t,r,b])
    
    vp.style.width=cw-(parseInt(l)+parseInt(r))*w;
    vp.style.height=ch-(parseInt(t)+parseInt(b))*h;
    vp.style.marginLeft=w*parseInt(l);
    vp.style.marginTop=h*parseInt(t);
    vp.style.borderRadius=(w+h)/4+'px';
    vp.style.position='absolute';
    vp.style.zIndex=1;
    vp.style.overflow='scroll'
    container.insertBefore(vp,container.firstChild);
}