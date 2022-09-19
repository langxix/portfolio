function validateForm() {
    var Name = document.forms["messageform"]["Name"].value;
    var Email = document.forms["messageform"]["Email"].value;
    var message = document.forms["messageform"]["message"].value;

    if (Name ==""|| Email =="" || message == ""){
      alert("Empty fields found. please fill the form");
    }
    else{
      alert("Thank you for the feedback.");
    }
  }

  