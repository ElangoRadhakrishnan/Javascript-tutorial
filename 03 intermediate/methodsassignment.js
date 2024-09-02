// creating object
var user ={
    firstName : "Rocky",
    lastName: "balbolah",
    role: "Admin",
    loginCount : 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse : function (courseName){
        this.courseList.push(courseName);
    },
    //method1
    getCourseCount: function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
     },
     //method2
     info: function(){
        return{
            firstName:this.firstName,
            lastName:this.lastName,
            role: this.role,
            loginCount: this.loginCount,
            facebookSignedIn:this.facebookSignedIn,
            courseList:this.courseList,
            totalCourses: this.courseList.length,
        }
     }
    };
  
user.buyCourse("Reactjs course");
user.buyCourse("Angular course");

console.table(user);