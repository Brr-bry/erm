var cursor = document.getElementById("cursor");
var no = document.getElementById("no");
const noSfx = new Audio("./nope.mp3"); 

document.addEventListener("mousemove", 
    function(event) {
        var x = event.clientX;
        var y = event.clientY;
        cursor.style.top= y+"px";
        cursor.style.left= x+"px";
    }
);
no.addEventListener("mouseover",
    
    function(e){
        let rdmX = Math.random() * (window.innerWidth - 50);
        let rdmY = Math.random() * (window.innerHeight - 50);
        
        no.style.position = "absolute";
        no.style.top = rdmY + "px";
        no.style.left = rdmX + "px";
        
        noSfx.play();
    }
);