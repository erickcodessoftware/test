let inputSubject=$("#txtSubjectName");
let subject="";

function register(){
    let sub = inputSubject.val();
    save(sub);
    subject='<li>${sub}</li>';
    $("#subjectList").append(sub,"<br>");
}

function init(){
    $("#registerBtn").on('click',register);
}

window.onload=init;