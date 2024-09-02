var users = {
    firstName : "Samy",
    lastName: "moocha",
    role: "Admin",
    loginCount : 32,
    facebookSignedIn: true,
};

console.log(users.firstName);
console.log(users["lastName"]);// parameter as string

console.log(users.loginCount); // duplication
users.loginCount = 44;
console.log(users.loginCount);

console.table(users);