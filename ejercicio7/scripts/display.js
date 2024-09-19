function displayRow() {
    const TABLE = document.getElementById("studentsList");
    let row = ''; // create a variable to store the row

    for(let i=0; i<students.length; i++){
        let student = students[i];
        row+=`
        <tr>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.gender}</td>
            <td>${student.g1}</td>
            <td>${student.g2}</td>
            <td>${student.g3}</td>
            <td>${calculatingAverage(student)}</td>
        </tr>
        `;
    }
    TABLE.innerHTML = row; // insert the row in the table'
    displayTotals();
}

function displayTotals(){
    document.getElementById("total").textContent = students.length;
}