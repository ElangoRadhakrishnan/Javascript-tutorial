var user = "subadmin";

switch(user)
{
 case"admin":
 console.log("you get full access");
break;
 case "subadmin":
 console.log("you get full access");
 break;
 case "test":
 console.log("get acess to create/delete test");
 break;
 case "user":
    console.log(" access to consume content");
    break;

    default:
        console.log("Trail user");
        break;

}