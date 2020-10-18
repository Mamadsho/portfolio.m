function startup(){
    var el=document.querySelector('#canvas');
    el.addEventListener('touchstart', handleStart, false);
    el.addEventListener('touchend', handleEnd, false);
    el.addEventListener('touchcancel', handleCancel, false);
    el.addEventListener('touchmove', handleMove, false);
}

document.addEventListener('DOMContentLoaded', startup);

//tracking new touches:
var ongoingTouches=[];

function handleStart(evt){
    evt.preventDefault();
    console.log('touchstart.');
    var el=document.querySelector('#canvas');
    var ctx=el.getContext('2d');
    var touches=evt.changedTouches; //interesting Element!

    for (var i=0; i<touches.length; i++){
        console.log(`touchstart:${i}...`);
        console.log(`ongoing touch:${touches[i].pageX}...${touches[i].pageY}..`);
        
    }
}