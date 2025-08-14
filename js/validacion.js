function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const form = document.getElementById('regBtn');

form.addEventListener('click', function() {
    let campos = document.getElementsByClassName("form-control");
    let hayVacio = false;

    for (let i = 0; i < campos.length; i++) {
        if (campos[i].value.trim() === '') {
            hayVacio = true;
        }
    }

    if (hayVacio) {
        showAlertError();
    } else {
        showAlertSuccess();
    }
});