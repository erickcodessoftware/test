const inputName = document.getElementById("txtName");
const inputAge = document.getElementById("txtAge");
const inputGender = document.getElementById("txtGender");
const inputG1 = document.getElementById("txtGrade1");
const inputG2 = document.getElementById("txtGrade2");
const inputG3 = document.getElementById("txtGrade3");
const registerBtn = document.getElementById("btnRegister");
let students = [];

let school ={
    name:"FCITEC",
    address:{
        street:"no name",
        number:"333",
    },
    hour:{
        open:"8:00",
        close:"18:00"
    }
}

// object constructor
function Student(name,age,gender,g1,g2,g3){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.g1=g1;
    this.g2=g2;
    this.g3=g3;
}

function register(){
    // crate a new student
    let newStudent = new Student(inputName.value,inputAge.value,inputGender.value
        ,inputG1.value,inputG2.value,inputG3.value);
        students.push(newStudent);
        console.log(students);

}

function calculatingAverage(Student){
    // display the sumes of the grades on the console
    let sum=0;
    sum = (Number(student.g1) + Number(student.g2) + Number(student.g3))/3;
    console.log(sum.toFixed(2));
}

function init(){
    // hook events
    registerBtn.addEventListener('click',register);
    displayRow();
}

window.onload=init;