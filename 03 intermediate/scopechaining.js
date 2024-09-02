var fname ="Mark";
    
console.log("Line number 3" , fname);

function sw(){
    var fname = "My M";
    console.log("Line number 7 ",fname);
    sw2();

    function sw2(){
        var fname ="Mr.M";
        console.log("line number 10", fname);
    }
}

sw();