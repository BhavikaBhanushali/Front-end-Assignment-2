(function init() {

  var arrayOfPersons, arrayOfGrades;
  console.log("Initialization done!!");
  arrayOfPersons = [new Person("Bhavika", "Bhanushali"),
    new Person("Palak", "Bhanushali"),
    new Person("Mark", "Yang"),
    new Person("Kim", "Yang"),
    new Person("Mayur", "Ahir"),
    new Person("Jags", "Ahir")
  ];
  console.log(arrayOfPersons);
  displayStudent(arrayOfPersons);

  arrayOfGrades = [new Grade("Bhavika Bhanushali", "Software Design", "4.0"),
    new Grade("Bhavika Bhanushali", "Business Intelligence", "3.7"),
    new Grade("Bhavika Bhanushali", "Networks", "3.4"),
    new Grade("Palak Bhanushali", "Back-end", "3.1"),
    new Grade("Palak Bhanushali", "Seminar", "4.0"),
    new Grade("Palak Bhanushali", "Computer Architecture", "3.66"),
    new Grade("Mark Yang", "Testing", "2.2"),
    new Grade("Mark Yang", "Front-end", "2.5"),
    new Grade("Mark Yang", "Software Process", "2.8"),
    new Grade("Kim Yang", "Project", "3.9"),
    new Grade("Kim Yang", "Machine Learning", "2.5"),
    new Grade("Kim Yang", "Neural Network", "2.8"),
    new Grade("Jags Ahir", "Software Architecture", "2.2"),
    new Grade("Jags Ahir", "Artificial Intelligence", "2.5"),
    new Grade("Jags Ahir", "Distributed Systems", "2.8"),
    new Grade("Mayur Ahir", "Computer Graphics", "2.2"),
    new Grade("Mayur Ahir", "Electronics", "2.5"),
    new Grade("Mayur Ahir", "Thesis", "2.8")
  ];
  console.log(arrayOfGrades);
  displayGrade(arrayOfGrades);

})();
