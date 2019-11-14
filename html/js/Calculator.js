//function with argument, without return
function sum(a, b){
    var c;
    c = a+b;
    console.log(a+'+'+b+'='+c);
}

var btn = document.getElementById('btn')
btn.onclick = function(){
    var n = document.getElementById('num1').value;
    var s = document.getElementById('num2').value;
    sum (parseFloat(n), parseFloat(s))
}

function sub(a, b){
    var c;
    c = a-b;
    console.log(a+'-'+b+'='+c);
}

var btn = document.getElementById('btnsub')
btn.onclick = function(){
    var n = document.getElementById('num1').value;
    var s = document.getElementById('num2').value;
    sub (parseFloat(n), parseFloat(s))
}

function mul(a, b){
    var c;
    c = a*b;
    console.log(a+'*'+b+'='+c);
}

var btn = document.getElementById('btnmul')
btn.onclick = function(){
    var n = document.getElementById('num1').value;
    var s = document.getElementById('num2').value;
    mul (parseFloat(n), parseFloat(s))
}

function div (a, b){
    var c;
    c = a/b;
    console.log(a+'/'+b+'='+c);
}

var btn = document.getElementById('btndiv')
btn.onclick = function(){
    var n = document.getElementById('num1').value;
    var s = document.getElementById('num2').value;
    div (parseFloat(n), parseFloat(s))
}

