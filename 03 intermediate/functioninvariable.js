let getUserRole = (name, role) =>
{
     switch(role)
     {
        case "admin":
            return`${name} is admin with all access`
          
            case "subadmin":
                return`${name} is subadmin with access `
            
                case "testprep":
                    return`${name} is testprep  access test`
                    
                    case "user":
                        return`${name} is user to content`
                        
                        default:
                            return`${name} is trail content`
                            
     }
}
console.log(getUserRole("Elango","testprep"));

var  getRole=getUserRole("sam", "user");
 console.log(getRole);