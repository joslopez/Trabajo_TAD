document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('inscribir')?.addEventListener('submit', function (event) {
        event.preventDefault();
        let nombre = document.getElementById('nombre').value.trim();
        let email = document.getElementById('email').value.trim();
        let mensaje = document.getElementById('telefono').value.trim();
  
        if (!nombre || !email || !mensaje) {
            alert('Por favor, complete todos los campos antes de enviar el formulario.');
            return;
        }
  
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Ingrese un correo electrónico válido.');
            return;
        }
  
        document.getElementById('alerta-exito').classList.remove('d-none');
        this.reset();
    });
});