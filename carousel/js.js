window.onload=function(){
    var box=document.getElementById('box');
    var first=document.getElementById('first');
    var second=document.getElementById('second');
    var min=document.getElementById('min');
    var max=document.getElementById('max');
    var index=1;
    var timer;
    function getStyle(obj,attr){
        if(obj.currentStyle){
            return obj.currentStyle[attr];
        }else{
            return getComputedStyle(obj,null)[attr];
        }
    }
    function animate(req) {
        var newLeft = parseInt(first.style.left) + req;
        first.style.left = newLeft + 'px';
        if (newLeft > -1000) {
            first.style.left = -3000 + 'px';
        }
        if (newLeft < -3000) {
            first.style.left = -1000 + 'px';
        }
    }
    function play() {
        timer = setInterval(function() {
            max.onclick();
        }, 2000)
    }
    function stop() {
        clearInterval(timer);
    }
    max.onclick = function() {
        index += 1;
        if (index > 5) {
            index = 1
        }
        animate(-1000);
    };
    box.onmouseover = stop;
    box.onmouseout = play;
    play();

}




    