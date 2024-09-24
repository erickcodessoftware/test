function save(subject){
    let data = read();
    data.push(subject);
    let val= JSON.stringify(data);
    localStorage.setItem("subject",val);
}

function read(){
    let data = localStorage.getItem("subject");
    if (!data){
        return [];
    } else{
        let list = JSON.parse(data);
        console.log(list);
        return list;
    }
}