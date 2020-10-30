// we still need prefixed methods for Chrome & Safari
document.addEventListener('DOMContentLoaded',()=>{
    if(document.querySelector("body").requestFullscreen)
	    document.querySelector("body").requestFullscreen();
    else if(document.querySelector("body").webkitRequestFullScreen)
	    document.querySelector("body").webkitRequestFullScreen();
})