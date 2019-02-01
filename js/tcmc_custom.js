//For Read More
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More >>"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less >>"; 
    moreText.style.display = "inline";
  }
}

function checkName(document) {
    var fname = document.getElementById("fname");
    var fname_msg = document.getElementById('fname_msg');
    
    if (fname.value == "") {
    fname_msg.innerHTML = "You did not enter a First Name. Please enter your First Name.";
    fname.innerHTML = document.getElementById("fname").style["border-color"] = 'red';
    fname.focus();
    return false;
    }
    else
    {
      fname_msg.innerHTML = "";
      fname.innerHTML = document.getElementById("fname").style["border-color"] = '';
    }
    return true;
  }
  
  function checklName(document) {
    var lname = document.getElementById("lname");
    var lname_msg = document.getElementById('lname_msg');
    
    if (lname.value == "") {
    lname_msg.innerHTML = "You did not enter a Last name. Please enter your Last Name.";
    lname.innerHTML = document.getElementById("lname").style["border-color"] = 'red';
    lname.focus();
    return false;
    }
    else
    {
      lname_msg.innerHTML = "";
      lname.innerHTML = document.getElementById("lname").style["border-color"] = '';
    }
    return true;
  }


function checkUsername(document) {
    var uname = document.getElementById("uname");
    var uname_msg = document.getElementById('uname_msg');
    
    if (uname.value == "") {
    uname_msg.innerHTML = "Please choose your User Name.";
    uname.innerHTML = document.getElementById("uname").style["border-color"] = 'red';
    uname.focus();
    return false;
    }
    else
    {
      uname_msg.innerHTML = "";
      uname.innerHTML = document.getElementById("fname").style["border-color"] = '';
    }
    return true;
}

function checkemail(document) {
    var email = document.getElementById("email");
    var email_msg = document.getElementById('email_msg');
    var isNum = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
    if (!isNum) {
    email_msg.innerHTML = "Email Id is Invalid. Please re-enter your email.";
    email_msg = document.getElementById("email").style["border-color"] = 'red';
    email.focus();
    return false;
    }
    else
    {
      email_msg.innerHTML = "";
      email_msg.innerHTML = document.getElementById("email").style["border-color"] = '';
    }
    return true;
  }
  
function checkPassword(document) {
    var pwd = document.getElementById("password");
    var pwd_msg = document.getElementById('pwd_msg');
    if (pwd.value == "") {
    pwd_msg.innerHTML = "You did not enter a password. Please enter a new password.";
    pwd.innerHTML = document.getElementById("password").style["border-color"] = 'red';
    pwd.focus();
    return false;
    }
    else
    {
      pwd_msg.innerHTML = "";
      pwd.innerHTML = document.getElementById("password").style["border-color"] = '';
    }
    return true;
  }   
  
function checkRePassword(document) {
    var pwd = document.getElementById("password");
    var pwd_confirm_msg = document.getElementById('pwd_confirm_msg');
    var repwd = document.getElementById('repassword');
    if (repwd.value != pwd.value) {
    pwd_confirm_msg.innerHTML = "The two passwords donot match with each other. Please Confirm Your Password.";
    repwd.innerHTML = document.getElementById("repassword").style["border-color"] = 'red';
    repwd.value="";
    pwd.focus();
    return false;
    }
    else
    {
      pwd_confirm_msg.innerHTML = "";
      repwd.innerHTML = document.getElementById("repassword").style["border-color"] = '';
    }
    return true;
  }
  
function validateInfo(document) {
    if(checkName(document) && checklName(document) && checkUsername(document) && checkemail(document) && checkPassword(document) && checkRePassword(document))
    {
      return true;
    }
  return false;
  }