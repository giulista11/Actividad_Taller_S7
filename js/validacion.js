function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

function comprobarLength {
    let password1 = document.getElementById("password1").value;
  return password1.length >= 6; 
}


