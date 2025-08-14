function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function comprobarPasswords() {
    let password1 = document.getElementById('password1').value
    let password2 = document.getElementById('password2').value
console.log(password1)
console.log(password1 == password2)
return password1 == password2
}



document.getElementById("regBtn").addEventListener("click", function () {
  let password1 = document.getElementById("password1").value;
  return console.log(password1.length >= 6);
});

