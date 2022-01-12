/*function add(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a)+Number(b);
    document.getElementById("output").innerText=`Sum of number is ${out}`
}
let add = () => {
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a)+Number(b);
    document.getElementById("output").innerText=`Sum of number is ${out}`
}
function sub(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a)-Number(b);
    document.getElementById("output").innerText=`Sum of number is ${out}`
}*/


function calc(opt){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out;
    if(opt == "add"){
        out = `Output is ${Number(a)+Number(b)}`;
    }else if(opt == "sub"){
        out = `Output is ${Number(a)-Number(b)}`;
    }else if(opt == "mul"){
        out = `Output is ${Number(a)*Number(b)}`;
    }else if(opt == "mod"){
        out = `Output is ${Number(a)%Number(b)}`;  
    
    }else{
        out = `Output is ${Number(a)/Number(b)}`; 
    }
    document.getElementById("output").innerText=out
}

  