function Person(fn, ln) {
  this.first_name = fn;
  this.last_name = ln;
}

function Grade(name, course, gpa) {
  this.name = name;
  this.course = course;
  this.gpa = gpa;
}

var student_set = new Array();
var grades = new Array();

/**function to display list of students**/
function displayStudent(obj) {
  for (i = 0; i < obj.length; i++) {
    var p = new Person(obj[i].first_name, obj[i].last_name);
    student_set.push(p);
  }
  //console.log(student_set);
}

/**function to display grades of selected student**/
function displayGrade(obj) {
  for (i = 0; i < obj.length; i++) {
    var p = new Grade(obj[i].name, obj[i].course, obj[i].gpa);
    grades.push(p);
  }
  //console.log(grades);
}
