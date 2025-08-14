function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


const form = document.getElementById('regBtn');

form.addEventListener('click', function() {
  if(camposVacios() && !comprobarPasswords() && !comprobarLength()){
      showAlertError();
  }else{
      showAlertSuccess();
  }
});

function camposVacios(){
    let campos = document.getElementsByClassName("form-control");
    let hayVacio = false;

    for (let i = 0; i < campos.length; i++) {
        if (campos[i].value.trim() === '') {
            hayVacio = true;
        }
    }

    return hayVacio;
}

function comprobarPasswords() {
    let password1 = document.getElementById('password1').value
    let password2 = document.getElementById('password2').value


return password1 == password2;
}





function comprobarLength (){
    let password1 = document.getElementById("password1").value;
  return password1.length >= 6; 
}



