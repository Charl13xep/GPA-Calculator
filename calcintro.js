//var form = document.getElementById('form1')

//var units = document.getElementById("units").value



var s = document.createElement("form");
//document.body.appendChild()

function createForm(units){
    
    for(i=0; i<=units; i++ ){
       var form2 = document.createElement("form")

       // create form input

       var unitName = document.createElement("input")
       unitName.type = "text";
       unitName.name = "unitname";
       unitName.placeholder = "Unit " + i;
       form.appendChild(unitName);

    }

    //submit button

    var submitButton = document.createElement("input")
    submitButton.type = "submit"
    submitButton.value = "submit"
    form.appendChild(submitButton);

    document.body.appendChild(form2)
}

createForm(2);