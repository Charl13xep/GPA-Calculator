// JavaScript source code
var gpa4;
var subjectGPA = [];
var marks;
var totalMarks = 0;
var totalSubjects = 0;
var grade = [];
var totalGPA = 0;
var totalSemester = 0;
var check = 0;

function calculate() {
    var Stringgpa4 = document.getElementById('setgpa').value;
    gpa4 = parseInt(Stringgpa4);
    totalSubjects = 0;
    totalMarks = 0;
    for (var i = 1; i <= 8; i++) {
        if (document.getElementById('inputm' + i).value != "") {
            totalSubjects++;
        }
    }

    for (var i = 1; i <= totalSubjects; i++) {
        marks = document.getElementById('inputm' + i).value;
        if (marks >= gpa4) {
            subjectGPA[i - 1] = 4;
            grade[i - 1] = 'A';
            totalMarks += totalMarks + parseInt(marks);
        } else if (marks >= gpa4 - 5) {
            subjectGPA[i - 1] = 3.7;
            grade[i - 1] = 'A-';
            totalMarks += totalMarks + parseInt(marks);
        } else if (marks >= gpa4 - 10) {
            subjectGPA[i - 1] = 3.3;
            grade[i - 1] = 'B';
            totalMarks += totalMarks + parseInt(marks);
        } else if (marks >= gpa4 - 15) {
            subjectGPA[i - 1] = 3.0;
            grade[i - 1] = 'B-';
            totalMarks += totalMarks + parseInt(marks);
        } else if (marks >= gpa4 - 20) {
            subjectGPA[i - 1] = 2.7;
            grade[i - 1] = 'C';
            totalMarks += totalMarks + parseInt(marks);
        } else if (marks >= gpa4 - 25) {
            subjectGPA[i - 1] = 2.3;
            grade[i - 1] = 'C-';
            totalMarks += totalMarks + parseInt(marks);
        } else if (marks >= gpa4 - 30) {
            subjectGPA[i - 1] = 2.0;
            grade[i - 1] = 'D';
            totalMarks += totalMarks + parseInt(marks);
        } else if (marks >= gpa4 - 35) {
            subjectGPA[i - 1] = 1.7;
            grade[i - 1] = 'D-';
            totalMarks += totalMarks + parseInt(marks);
        } else if (marks >= gpa4 - 40) {
            subjectGPA[i - 1] = 1.3;
            grade[i - 1] = 'E';
            totalMarks += totalMarks + parseInt(marks);
        } else if (marks >= gpa4 - 45) {
            subjectGPA[i - 1] = 1.0;
            grade[i - 1] = 'E-';
            totalMarks += totalMarks + parseInt(marks);
        } else {
            subjectGPA[i - 1] = 0;
            grade[i - 1] = 'F';
            totalMarks += totalMarks + parseInt(marks);
        }
    }

    showResult();
}

function showResult() {
    var per = 0;
    var totalHours = 0;
    var gpaSum = 0;

    // Update HTML with calculated grades and GPAs
    for (var i = 1; i <= totalSubjects; i++) {
        // Example: Update grade and GPA display for each subject
        document.getElementById('grade' + i).innerHTML = grade[i - 1];
        document.getElementById('gpaOfSbj' + i).innerHTML = subjectGPA[i - 1];
    }

    // Calculate total GPA and percentage
    for (var i = 1; i <= totalSubjects; i++) {
        var creditHour = parseInt(document.getElementById('hours' + i).value);
        totalHours += creditHour;
        gpaSum += (creditHour * subjectGPA[i - 1]);
    }

    var totalGPA = gpaSum / totalHours;
    var totalPercentage = (totalMarks * 100) / (totalSubjects * 100);

    // Update HTML with total GPA and percentage
    document.getElementById('showPercentage').innerHTML = "Percentage: " + Math.round(totalPercentage) + "%";
    document.getElementById('showGPA').innerHTML = "GPA: " + totalGPA.toFixed(2);

    console.log("Calculating results...");

    // Debug: Log subject GPAs and grades
    for (var i = 1; i <= totalSubjects; i++) {
        console.log("Subject " + i + " - Grade: " + grade[i - 1] + ", GPA: " + subjectGPA[i - 1]);
    }

    // Calculate total GPA and percentage
    console.log("Total Marks: " + totalMarks);
    console.log("Total Subjects: " + totalSubjects);
    console.log("Total Hours: " + totalHours);
    console.log("GPA Sum: " + gpaSum);

    // Update HTML with results
    document.getElementById('showPercentage').innerHTML = "Percentage: " + Math.round(totalPercentage) + "%";
    document.getElementById('showGPA').innerHTML = "GPA: " + totalGPA.toFixed(2);
}


function returnHome() {
    // Replace 'index.html' with the path of the HTML page you want to navigate to
    window.location.href = 'index.html'; // Redirects to the specified page
    // Optionally, you can add additional actions here if needed
}



// Function to add a new subject row
function addSubject() {
    totalSubjects++; // Increment total subjects count

    // Create new row elements
    var newRow = document.createElement('tr');
    var newTdSubject = document.createElement('td');
    var newTdCreditHours = document.createElement('td');
    var newTdMarks = document.createElement('td');
    var newTdGrade = document.createElement('td');
    var newTdGPA = document.createElement('td');

    // Populate the new row with elements and attributes
    newTdSubject.textContent = "Subject " + totalSubjects;
    newTdCreditHours.innerHTML = `<select class="select" id="hours${totalSubjects}">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>`;
    newTdMarks.innerHTML = `<input type="text" class="inputMarks" id="inputm${totalSubjects}" />`;
    newTdGrade.innerHTML = `<h3 id="grade${totalSubjects}">null</h3>`;
    newTdGPA.innerHTML = `<h3 id="gpaOfSbj${totalSubjects}" class="gpaLabel">null</h3>`;

    // Append new cells to the new row
    newRow.appendChild(newTdSubject);
    newRow.appendChild(newTdCreditHours);
    newRow.appendChild(newTdMarks);
    newRow.appendChild(newTdGrade);
    newRow.appendChild(newTdGPA);

    // Append the new row to the table body
    document.querySelector('table').appendChild(newRow);
}
