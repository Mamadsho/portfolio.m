selectedProjectN=0;
selectedPageN=0;

document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.project').forEach((pr)=>{
        pr.addEventListener('touchend',()=>{
            // DEFINITION OF ACTIVE PROJECT
            let t=getTranslateY(document.querySelector('.slider'));
            let samplePageStyle=window.getComputedStyle(document.querySelector('.page'),null)
            let h=parseInt(samplePageStyle.height)+2*parseInt(samplePageStyle.marginTop)
            let NoPr=Object.keys(data).length; // GET JSON DATA LENGTH

            //GIVEN top(slider), height(cirlce), NumberOfProjects(data)&=>NumberOfPages
            selectedProjectN=-Math.round(t/h)%NoPr; //PROJECT N

            let NoPg=data[Object.keys(data)[selectedProjectN]].length
            let selectedProject=document.querySelectorAll('.project')[-Math.round(t/h)]
            let l=getTranslateX(selectedProject);

            //GIVEN MORE nOfPages(project),left(project)
            selectedPageN=-Math.round(l/h)%NoPg; //PAGE N

            console.log('Selection: ',selectedProjectN,selectedPageN);

            //LAZY LOADING
            lazyLoad(Object.keys(data)[selectedProjectN],selectedPageN)
        })
        
    })
})