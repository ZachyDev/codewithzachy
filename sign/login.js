const validateForm = () =>{
    let form = document.forms['signform'];
    let mail = form.mail.value;
    let interest = form.interest.value
    
    //  checks if username is empty
     if (mail=="" || null) {
        alert("Email is required")
        return false;
    }
    // checks if password is empty
    
    if (interest=="" || null) {
        alert("Interest is required")
        return false;
    }

    if (interest==""  && mail=="" ){
      alert("Field are Required!");
    }
}
