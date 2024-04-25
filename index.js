
function validation(){
    if (document.loginform.firstname.value == "") {
        document.getElementById("error0").style.setProperty('display', 'block');
        document.getElementById('error0').innerHTML="First Name can not be empty";
        document.getElementById("first-name").style.setProperty('border-color', 'var(--clr-Red)');
   }
   if (document.loginform.lastname.value == "") {
    document.getElementById("error1").style.setProperty('display', 'block');
    document.getElementById('error1').innerHTML="Last Name can not be empty";
    document.getElementById("last-name").style.setProperty('border-color', 'var(--clr-Red)');
        
   }
   
   if (document.loginform.email.value == ""  ) {
    document.getElementById("error2").style.setProperty('display', 'block');
    document.getElementById('error2').innerHTML="Looks like this is not an email";
    document.getElementById("email").style.setProperty('border-color', 'var(--clr-Red)');
   }
    if (document.loginform.password.value == "") {
    document.getElementById("error3").style.setProperty('display', 'block');
    document.getElementById('error3').innerHTML="Password can not be empty";
    document.getElementById("password").style.setProperty('border-color', 'var(--clr-Red)');
    
    }

    var email = $('#email').val();
    
    if (email.length == 0) {
      document.getElementById("error2").style.setProperty('display', 'block');
      document.getElementById("email").style.setProperty('border-color', 'red');
    }
    
    if (!email.includes('@')) {
      document.getElementById("error2").style["display"]="block";
      document.getElementById("email").style.setProperty('border-color', 'red');
    }    
  
    function validateEmail(sumbittedemail) {
      var re = /\S+@\S+\.\S+/;
      return re.test(submittedemail);
    }
    
    if(!validateEmail(email)){
      document.getElementById("error2").style["display"]="block";
      document.getElementById("email").style.setProperty('border-color', 'red');
    }else { //submit form here
      document.getElementById("error2").style.setProperty('display', 'none');
      document.getElementById("email").style.setProperty('border-color', 'none');
      $('#emailForm').submit();
    }    
}

 