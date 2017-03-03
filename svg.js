var svg = document.getElementById("svg");
var rect = svg.getBoundingClientRect();
var wid = rect.width;
var hgt = rect.height;
var clrBtn = document.getElementById("clear");
var circBtn = document.getElementById("circle");
var dvdBtn = document.getElementById("dvd");
var stopBtn = document.getElementById("stop");
var frm;
var imge = document.createElementNS("http://www.w3.org/2000/svg", "image");
imge.setAttribute("href", "lel.png");
imge.setAttribute("width", "500");
imge.setAttribute("height", "500");
imge.setAttribute("x", 0);
imge.setAttribute("y", 0);
svg.appendChild(imge);


var clear = function() {
    window.cancelAnimationFrame(frm);
    while(svg.firstChild){
        svg.removeChild(svg.firstChild);
}
svg.appendChild(imge);
};

clrBtn.addEventListener("click", clear);

var stopit = function() {
    window.cancelAnimationFrame(frm);
};

stopBtn.addEventListener("click", stopit);


var animateSphere = function() {
    window.cancelAnimationFrame(frm)
    var x = ((wid - 150) / 2) + 30;
    var y = ((hgt - 107) / 2) + 34;
    var angle = 0;
    var r = 172 * Math.abs(Math.cos(angle));

    var animate = function() {
        clear();
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", r);
        circle.setAttribute("fill", "#daa520");
        svg.appendChild(circle);
        frm = window.requestAnimationFrame(animate);
        r = 172 * Math.abs(Math.cos(angle));
        angle += Math.PI / 128;
    }
    animate();
};

circBtn.addEventListener("click", animateSphere);

var randnum = function(a, b) {
    return (b - a) * Math.random() + a;
}

var animateDvd = function() {
    window.cancelAnimationFrame(frm);


    var v_x = 1;
    var v_y = 1;

    var width = 60;
    var height = 35;

    var maxX = wid - width - 120;
    var maxY = hgt - height - 74;
    var x = randnum(30, maxX);
    var y = randnum(34, maxY);

    var animate = function() {
        clear();
        var img = document.createElementNS("http://www.w3.org/2000/svg", "image");
        img.setAttribute("href", "dvd.png");
        img.setAttribute("width", "60");
        img.setAttribute("height", "35");
        img.setAttribute("x", x);
        img.setAttribute("y", y);
        svg.appendChild(img);
        frm = window.requestAnimationFrame(animate);
        if (x > maxX || x < 30) {
            v_x *= -1;
            (v_x < 0) ? v_x -=.33 : v_x+=.33
        }
        if (y > maxY || y < 34) {
            v_y *= -1;
            (v_y < 0) ? v_y -=.33 : v_y+=.33
        }
        x += v_x;
        y += v_y;
    }
    animate();    
};

dvdBtn.addEventListener("click", animateDvd);