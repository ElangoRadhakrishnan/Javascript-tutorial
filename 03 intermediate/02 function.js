function sayhi() // creating a function 
{
    console.log("HI"); 
}

let func = sayhi; // copy of a created function

func(); // calling a created function
sayhi();


// local variables in javascript
// A variable declared inside a function is only visible inside the function

function test12()
{
     let mess ="Hey There";
     console.log( mess);
}
test12();

console.log(test12);// error the variable is local to the function


//outer variables.
// a function can access the outer variable 
// var userName = 'ibm';
//     function show(){
//         var messeage = "Hello! "+ userName;
//         console.log(messeage);
//     }

//     show();

var userN= "Martha";
    function shwMessage()
    {
        userN = "Bob";message

        var message ='Hello' + userN;
        console.log(message);
    }

    console.log(userN);
        shwMessage();
        console.log(userN);


