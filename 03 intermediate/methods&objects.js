//object
var user ={
    firstName : "Samy",
    lastName: "moocha",
    role: "Admin",
    loginCount : 32,
    facebookSignedIn: true,
    courseList: [],
   // Method1
    buyCourse : function (courseName){
        this.courseList.push(courseName);
    },
    //Method2
 getCourseCount: function(){
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
 },
};

//variable declaration
var courseList = true;
 console.log(user.firstName);
 console.log(user.getCourseCount());
 user.buyCourse(" js course");
 user.buyCourse("Angular JS course");
 console.log(user.getCourseCount());