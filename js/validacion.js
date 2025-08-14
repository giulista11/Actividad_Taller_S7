function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


const form = document.getElementById('regBtn');

form.addEventListener('click', function() {
    console.log(!camposVacios())
    console.log(comprobarPasswords())
    console.log(comprobarLength())
    console.log(checkbox())
    console.log(camposVacios() && !comprobarPasswords() && !comprobarLength())
  if(!camposVacios() && comprobarPasswords() && comprobarLength() && checkbox()){
      showAlertSuccess(); 
  }else{
     showAlertError();
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
    let password1 = 0
    let password2 = 0
    password1 = document.getElementById('password1').value
    password2 = document.getElementById('password2').value


return password1 == password2;
}





function comprobarLength (){
    let password1 = document.getElementById("password1").value;
  return password1.length >= 6 && password1.length !== 0; 
}

function checkbox(){ 
    
       return document.getElementById('terminos').checked
 
 }

