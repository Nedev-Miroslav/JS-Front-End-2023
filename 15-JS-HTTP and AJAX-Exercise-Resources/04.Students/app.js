async function attachEvents() {

    const baseURL = "http://localhost:3030/jsonstore/collections/students";

    const tableBody = document.querySelector("tbody");
    const submitBtn = document.getElementById("submit");

    submitBtn.addEventListener("click", onLoad);

    const getResponse = await fetch(baseURL);
    const students = await getResponse.json();

    Object.values(students).forEach((student) => {

        const row = document.createElement("tr");

        row.innerHTML = `    
  <tr>
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td>${student.facultyNumber}</td>
      <td>${student.grade}</td>
  </tr>
  `;

        tableBody.appendChild(row);

    });

    async function onLoad() {

        const [firstName, lastName, facultyNumber, grade] = document.querySelectorAll("#form input");

        if (firstName.value && lastName.value && facultyNumber.value && grade.value) {

            const newStudentInfo = {
                firstName: firstName.value,
                lastName: lastName.value,
                facultyNumber: facultyNumber.value,
                grade: grade.value,
            }

            await fetch(baseURL, {
                method: "POST",
                body: JSON.stringify(newStudentInfo)
            })

            const row = document.createElement("tr");

            row.innerHTML = `    
  <tr>
      <td>${newStudentInfo.firstName}</td>
      <td>${newStudentInfo.lastName}</td>
      <td>${newStudentInfo.facultyNumber}</td>
      <td>${newStudentInfo.grade}</td>
  </tr>
  `;

            tableBody.appendChild(row);

            firstName.value = "";
            lastName.value = "";
            facultyNumber.value = "";
            grade.value = "";

        }

    }

}

attachEvents();