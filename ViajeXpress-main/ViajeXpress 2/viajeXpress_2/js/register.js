document.getElementById("registerForm").addEventListener("submit", function(event){
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const documento = document.getElementById("documento").value;
  const celular = document.getElementById("celular").value;
  const correo = document.getElementById("correo").value;
  const password = document.getElementById("password").value;

  if(nombre && documento && celular && correo && password){
    alert("Registro exitoso 🎉 Bienvenido a ViajeXpress, " + nombre);
    window.location.href = "login.html";
  } else {
    alert("Por favor completa todos los campos ❌");
  }
});
