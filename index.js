let cnt = 0;

for(let i = 1;i <= 10;i++) {
    let len = i*2 - 1;

    for(let j = 1;j <= (21 - len)/2;j++) {
        var box = document.createElement("button");
        box.className = "blank";
        box.id = cnt.toString();
        cnt++;
        document.getElementById("container").appendChild(box);
    }
    for(let j = 1;j <= len;j++) {
        var box = document.createElement("button");
        box.className = "box";
        box.id = cnt.toString();
        cnt++;
        document.getElementById("container").appendChild(box);
    }
    for(let j = 1;j <= (21 - len)/2;j++) {
        var box = document.createElement("button");
        box.className = "blank";
        box.id = cnt.toString();
        cnt++;
        document.getElementById("container").appendChild(box);
    }
}
for(let i = 1;i <= 21;i++) {
    var box = document.createElement("button");
    box.className = "box";
    box.id = cnt.toString();
    cnt++;
    document.getElementById("container").appendChild(box);
}
let curr = 21;
for(let i = 1;i <= 10;i++) {
    curr -= 2;
    let len = curr;

    for(let j = 1;j <= (21 - len)/2;j++) {
        var box = document.createElement("button");
        box.className = "blank";
        box.id = cnt.toString();
        cnt++;
        document.getElementById("container").appendChild(box);
    }
    for(let j = 1;j <= len;j++) {
        var box = document.createElement("button");
        box.className = "box";
        box.id = cnt.toString();
        cnt++;
        document.getElementById("container").appendChild(box);
    }
    for(let j = 1;j <= (21 - len)/2;j++) {
        var box = document.createElement("button");
        box.className = "blank";
        box.id = cnt.toString();
        cnt++;
        document.getElementById("container").appendChild(box);
    }
}
// assign numbers to "box" class
var grid = document.querySelector(".box");

var arr = [],pussy = [],visited = [];

function help(s) {
    if(s.length == 7) {
        pussy.push(s);
        return;
    }
}

for(let i = 0;i < 21;i++) {
    let asd = [];
    for(let j = 0;j < 21;j++) {
        asd.push(0);
    }
    visited.push(asd);
    arr.push(asd);
}

var res = "";

function reve(s) {
    let ret = "";
    for(let i = s.length - 1;i >= 0;i--) {
        ret += s[i];
    }
    return ret;
}

function gen() {
    pussy = [];

    for(let i = 0;i < 21;i++) {
        for(let j = 0;j < 21;j++) {
            var curr = "";
            for(let t = 0;t < 7 && j + t < 21;t++) {

                if(!document.getElementById((i*21 + j + t).toString())) {
                    break;
                } else {
                    curr += document.getElementById((i*21 + j + t).toString()).innerHTML;
                }
            }
            help(curr);
            help(reve(curr));

            curr = "";
            for(let t = 0;t < 7 && i + t < 21;t++) {
                if(!document.getElementById(((i + t)*21 + j).toString())) {
                    break;
                } else {
                    curr += document.getElementById(((i + t)*21 + j).toString()).innerHTML;
                }
            }
            help(curr);
            help(reve(curr));


            curr = "";
            for(let t = 0;t < 7 && i + t < 21 && j + t < 21;t++) {
                if(!document.getElementById(((i + t)*21 + j + t).toString())) {
                    break;
                } else {
                    curr += document.getElementById(((i + t)*21 + j + t).toString()).innerHTML;
                }
            }
            help(curr);
            help(reve(curr));


            curr = "";
            for(let t = 0;t < 7 && i + t < 21 && j - t >= 0;t++) {
                if(!document.getElementById(((i + t)*21 + j - t).toString())) {
                    break;
                } else {
                    curr += document.getElementById(((i + t)*21 + j - t).toString()).innerHTML;
                }
            }
            help(curr);
            help(reve(curr));
        }
    }
    const randomElement = pussy[Math.floor(Math.random() * pussy.length)];
    return randomElement;
}

function check() {

    for(let i = 0;i < 21;i++) {
        for(let j = 0;j < 21;j++) {
            var curr = "";
            for(let t = 0;t < 7 && j + t < 21;t++) {
                if(!arr[i][j + t]) {
                    break;
                } else {
                    curr += document.getElementById((i*21 + j + t).toString()).innerHTML;
                }
            }
            if(curr == res) return true;
            if(reve(curr) == res) return true;

            curr = "";
            for(let t = 0;t < 7 && i + t < 21;t++) {
                if(!arr[i + t][j]) {
                    break;
                } else {
                    curr += document.getElementById(((i + t)*21 + j).toString()).innerHTML;
                }
            }
            if(curr == res) return true;
            if(reve(curr) == res) return true;


            curr = "";
            for(let t = 0;t < 7 && i + t < 21 && j + t < 21;t++) {
                if(!arr[i + t][j + t]) {
                    break;
                } else {
                    curr += document.getElementById(((i + t)*21 + j + t).toString()).innerHTML;
                }
            }
            if(curr == res) return true;
            if(reve(curr) == res) return true;


            curr = "";
            for(let t = 0;t < 7 && i + t < 21 && j - t >= 0;t++) {
                if(!arr[i + t][j - t]) {
                    break;
                } else {
                    curr += document.getElementById(((i + t)*21 + j - t).toString()).innerHTML;
                }
            }
            if(curr == res) return true;
            if(reve(curr) == res) return true;
        }
    }
    return false;
}

var white = "rgb(255,255,255)",pink = "rgb(255,192,203)",blue = "rgb(0,0,255)",green = "rgb(0,255,0)",red = "rgb(255,0,0)";
let clicked = 0;

const handler = e => {

    let idx = parseInt(e.target.id);
    let row = Math.floor(idx/21),col = idx%21;

    if(arr[row][col] == 0) {
        if(clicked == 7) {
            return;
        }
        clicked++;
        e.target.style.backgroundColor = "#178a39";

        e.target.removeEventListener("mouseover",function(e) {
            e.target.style.backgroundColor = "#178a39";
        });
        e.target.removeEventListener("mouseout",function(e) {
            e.target.style.backgroundColor = "#ffffff";
        });

        e.target.addEventListener("mouseover",function(e) {
            e.target.style.backgroundColor = "#ffffff";
        });
        e.target.addEventListener("mouseout",function(e) {
            e.target.style.backgroundColor = "#178a39";
        });

    } else {
        clicked--;
        e.target.style.backgroundColor = "#ffffff";

        e.target.removeEventListener("mouseover",function(e) {
            e.target.style.backgroundColor = "#ffffff";
        });
        e.target.removeEventListener("mouseout",function(e) {
            e.target.style.backgroundColor = "#178a39";
        });

        e.target.addEventListener("mouseover",function(e) {
            e.target.style.backgroundColor = "#178a39";
        });
        e.target.addEventListener("mouseout",function(e) {
            e.target.style.backgroundColor = "#ffffff";
        });

    }
    arr[row][col] = 1 - arr[row][col];

    if(check()) {
        document.getElementById("description").innerHTML = "You won!";
        // remove all event listeners
        for(let i = 0;i < 21*21;i++) {
            document.getElementById(i.toString()).removeEventListener("click",handler);
        }
    }

}


let asd = 0;

function init() {
    clicked = 0;
    for(let i = 0;i < 21*21;i++) {
        if(document.getElementById(i.toString()).className == "box") {
            document.getElementById(i.toString()).innerHTML = Math.floor(Math.random() * 10);
            document.getElementById(i.toString()).addEventListener("click",handler);
            
            document.getElementById(i.toString()).addEventListener("mouseover",function(e) {
                e.target.style.backgroundColor = "#178a39";
            });
            document.getElementById(i.toString()).addEventListener("mouseout",function(e) {
                e.target.style.backgroundColor = "#ffffff";
            });
            let row = Math.floor(i/21),col = i%21;

            visited[row][col] = 1;
            arr[row][col] = 0;
        } 
    }
    res = gen();
    document.getElementById("description").innerHTML = "Find " + res;
}

document.getElementById("start").addEventListener("click",init);






