//var form = document.getElementById('form1')

//var units = document.getElementById("units").value



// var s = document.createElement("form");
//document.body.appendChild()

function createForm(units){
    
    for(i=0; i<=units; i++ ){
       var form2 = document.createElement("form")

       // create form input

       var unitName = document.createElement("input")
       unitName.type = "text";
       unitName.name = "unitname";
       unitName.placeholder = "Unit " + i;
       form2.appendChild(unitName);

    }

    //submit button

    var submitButton = document.createElement("input")
    submitButton.type = "submit"
    submitButton.value = "submit"
    form2.appendChild(submitButton);

    document.body.appendChild(form2)
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    const year = document.getElementById('year').value;
    const semester = document.getElementById('semester').value;
    const units = document.getElementById('units').value;
    const institution = document.querySelector('[name="institution"]').value;
    const gpa4 = document.getElementById('gpa4').value;

    // Reference to Firestore database
    const db = getFirestore(app); // Ensure 'app' is initialized as shown in firebase-config.js

    // Adding data to Firestore
    setDoc(doc(db, "formData", "uniqueDocumentID"), { // Use a unique ID or let Firestore generate it
      year: year,
      semester: semester,
      units: units,
      institution: institution,
      gpa4: gpa4
    }).then(() => {
      console.log('Data saved successfully!');
      // Optionally, clear the form or give feedback to the user
    }).catch((error) => {
      console.error('Error saving data: ', error);
    });
  });
});

createForm(2);