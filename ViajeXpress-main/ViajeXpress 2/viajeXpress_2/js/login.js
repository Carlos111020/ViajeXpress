document.getElementById("loginForm").addEventListener("submit", function(event){
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(email === "admin@gmail.com" && password === "12345"){
    alert("Inicio de sesión exitoso 🎉");
    window.location.href = "index.html";
  } else {
    alert("Email o contraseña incorrectos ❌");
  }
});
