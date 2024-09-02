//User is only allowed to make a purchase
let isLoggedIn = true;
    let isEmailisVerified =false;
        let cardInfo =true;

        // if(isLoggedIn){
        //     console.log("Logged in succesfully");
        //     if(isEmailisVerified){
        //         console.log("email is verified");
        //         if( cardInfo){
        //             console.log("you make purchase");
        //         }
        //     }
        // }

        if(isLoggedIn || isEmailisVerified || cardInfo)
        {
            console.log ("allow user to purcahse");
        } else{
            console.log("you are not allowed to that");
        }