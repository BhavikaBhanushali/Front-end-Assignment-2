/**function to display student list by lastname**/
function searchStudent() {
  console.log("Search button clicked.......");
  var student = document.getElementById('last_name').value;
  var tb = document.getElementById("tableBody");
  tb.innerHTML = "";
  var lb = document.getElementById("studentlabel");
  lb.innerHTML = "";

  if (student)
    document.getElementById("studentList").innerHTML = "";
  for (i = 0; i < student_set.length; i++)
    if (student.toLowerCase() == student_set[i].last_name.toLowerCase()) {
      //console.log(student_set[i].first_name.toUpperCase());
      var node = document.createElement("li");
      node.setAttribute("id", i);

      node.onclick = function() {
        var div_id = event.target.id;
        studentGrade(div_id);
      };

      var textnode = document.createTextNode(student_set[i].first_name + " " + student_set[i].last_name);
      node.appendChild(textnode);
      document.getElementById("studentList").appendChild(node);
    }

}

/**function to display grade table for selected student**/
function studentGrade(div_id) {

  console.log(div_id);
  var el = document.getElementById(div_id).innerHTML;
  //console.log(el);
  var table = document.getElementById("table_1");

  var tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  //console.log(tbody);

  for (i = 0; i < grades.length; i++)
    if (el.toLowerCase() == grades[i].name.toLowerCase()) {
      var name = grades[i].name;
      var row = tbody.insertRow();
      var cell_1 = row.insertCell(0);
      var cell_2 = row.insertCell(1);
      cell_1.innerHTML = grades[i].course;
      cell_2.innerHTML = grades[i].gpa;
      document.getElementById("studentlabel").innerHTML = "Grades for " + name + " :";
      console.log(grades[i].course + grades[i].gpa);
    }

}
