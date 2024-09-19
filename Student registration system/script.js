
let students = [];

function updateTable() {
    const tableBody = document.querySelector("#studentTable tbody");
    tableBody.innerHTML = "";  // Clear the table

    students.forEach((student, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.gender}</td>
            <td>${student.grades}</td>
            <td>${student.studentId}</td>
            <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function addStudent(event) {
    event.preventDefault();

    // Capture form data
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const gender = document.querySelector('#gender').value;
    const grades = document.querySelector('#grades').value.trim();
    const studentId = document.querySelector('#studentId').value.trim();

    if (!name || !email || !gender || !grades || !studentId) {
        alert("All fields are required");
        return;
    }



    students.push({ name, email, gender, grades, studentId });

    document.querySelector('#studentForm').reset();

    updateTable();
}

function deleteStudent(index) {
    students.splice(index, 1);  // Remove student from array
    updateTable();  // Refresh the table
}

document.querySelector('#studentForm').addEventListener('submit', addStudent);
