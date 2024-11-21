document.getElementById("showStudents").addEventListener("click", function () {
  const studentsList = document.getElementById("studentsList");
  if (studentsList.style.display === "none") {
    studentsList.style.display = "block";
    this.textContent = "Скрыть учеников";
  } else {
    studentsList.style.display = "none";
    this.textContent = "Показать учеников";
  }
});
