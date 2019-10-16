function ValidateEmail(email) {
  let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;				
  if(regex.test(email)){
    return alert('Thank you!');
  }
  let p = document.getElementById('valid-email');
  let icon = document.getElementById('attention');
  icon.style.opacity = 1;
  p.style.opacity = 1;
}

function button() {
  let email = document.getElementById('email');
	email = email.value
  ValidateEmail(email);
}
