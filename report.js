// report.js

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the saved data from localStorage
    const reportCardData = JSON.parse(localStorage.getItem('reportCardData'));
    const gpaRecords = JSON.parse(localStorage.getItem('gpaRecords'));
    
    // Example data - replace these with actual data retrieval or calculation logic
    const userDetails = {
        name: 'John Doe',
        semester: 'Fall 2023',
        finalGrade: 'A',
        averageGpa: 3.67
    };

    // Set the data in the HTML elements
    document.getElementById('name').innerText = userDetails.name;
    document.getElementById('semester').innerText = userDetails.semester;
    document.getElementById('final-grade').innerText = userDetails.finalGrade;
    document.getElementById('average-gpa').innerText = userDetails.averageGpa;


    // Check if the data exists
    if (reportCardData) {
        // Display the report card data
        document.getElementById('name').innerText = reportCardData.name;
        document.getElementById('semester').innerText = reportCardData.semester;
        document.getElementById('final-grade').innerText = reportCardData.finalGrade;
        document.getElementById('average-gpa').innerText = reportCardData.averageGpa;
    }
    
    // Retrieve the saved user details from localStorage
    // const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    
    // Display user details
    /*
    if (userDetails) {
        document.getElementById('name').innerText = `${userDetails.firstName} ${userDetails.lastName}`;
        // You can add more details to display here if needed
    } */
    
    if (gpaRecords && gpaRecords.length > 0) {
        const tbody = document.getElementById('gpa-records');
        gpaRecords.forEach(record => {
            const tr = document.createElement('tr');
            const courseNameTd = document.createElement('td'); // Changed from subjectTd to courseNameTd
            courseNameTd.innerText = record.courseName; // Changed from record.subject to record.courseName
            const gradeEarnedTd = document.createElement('td'); // Changed from gradeTd to gradeEarnedTd
            gradeEarnedTd.innerText = record.gradeEarned; // Changed from record.grade to record.gradeEarned
            const gpaPointsTd = document.createElement('td');
            gpaPointsTd.innerText = record.gpaPoints;
    
            tr.appendChild(courseNameTd);
            tr.appendChild(gradeEarnedTd);
            tr.appendChild(gpaPointsTd);
    
            tbody.appendChild(tr);
        });
    }
});
