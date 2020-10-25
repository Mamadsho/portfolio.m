data='';
lang='ru';

document.addEventListener('DOMContentLoaded',()=>{
    const req= new XMLHttpRequest();
    req.open('GET','data.json',false);
    req.onreadystatechange=()=>{
        data=JSON.parse(req.responseText);

        // HERE THE ACTION HAPPENS
        // 

        slider=document.querySelector('.slider');
        projectPack=document.createElement('div');
        projectPack.classList.add('projectPack');

        for (pr in data){
            console.log(pr);

            let project=document.createElement('div');
            project.classList.add('project');
            let pack=document.createElement('div');
            pack.classList.add('pack');
            //naming
            project.dataset.name=pr

            for (pg in data[pr]){
                console.log(pr, pg)
                let page=document.createElement('div');
                page.classList.add('page');
                //naming
                page.dataset.name=pg;

                try {
                    page.style=`background-image:url(${data[pr][pg]["icon"]})`;
                } catch (error) {
                    console.log('error');
                };
    
                pack.appendChild(page)    ;
            }
            project.appendChild(pack);
            projectPack.appendChild(project);
        }
        slider.appendChild(projectPack);
    };
    req.send();
})