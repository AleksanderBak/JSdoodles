let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()?:;'

let button = document.querySelector("#button")


function generatePwd(len){
    res = ''
    for(i = 0; i < len; i++){
        res += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return res
}

button.addEventListener('click', (event) => {
    
    var len = document.querySelector("#length").value
    if(len > 15) {
        alert("Password too long")
    } else if(len == 0) {
        
    } else {
        var elements = document.querySelectorAll(".outs");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = "block"
        }
        for(var i = 1; i <= 4; i++){
            k = "out-"+i
            out = generatePwd(len)
            document.getElementById(k).innerHTML = out
        }
    }
});

var outputs = document.getElementsByClassName("outs");

var copyFunc = function(){
    navigator.clipboard.writeText(this.innerHTML);
}

var outHover = function(){
    this.style.color = red;
}

for(var q = 0; q < outputs.length; q++){
    outputs[q].addEventListener('click', copyFunc, false);
}

