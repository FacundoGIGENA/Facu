const usuariosd =[
  {
      nombreUsuario: "facundogigena",
      documento:"333333",
      contactoTelefonico:"3511234567",
      pass:"juan008",
      categoria:"U21",
      division:"B1",
      entrenador:"Alvaro Imaz",
      cuotasAdeudadas: [
        "Enero-2024 - Adeuda $100000",
        "Febrero-2024 - Adeuda $100000"
    ]
      
  },
  {
      nombreUsuario: "mariafernandez",
      documento: "444444",
      contactoTelefonico: "3517654321",
      pass: "maria123",
      categoria: "U17",
      division:"B1",
      entrenador: "Lucía Gómez",
      cuotasAdeudadas: [
          "Octubre-2024 - Adeuda $50000",
          "Febrero-2024 - Adeuda $1000"
      ]
  }
];

let visible = false; // Estado de visibilidad
function mostrar() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
  const lista = document.getElementById("cuotasAdeudadas");

  if (!visible) {
    // Mostrar la lista
    lista.innerHTML = "";
    usuario.cuotasAdeudadas.forEach(cuota => {
      const li = document.createElement("li");
      li.textContent = cuota;
      lista.appendChild(li);
    });
    lista.style.display = "block"; // Mostrar
    visible = true;
    btncuotas.textContent = "Ocultar cuotas";
  } else {
    // Ocultar la lista
    lista.innerHTML = "";
    lista.style.display = "none"; // Ocultar
    visible = false;
    btncuotas.textContent = "Mostrar cuotas";
  }
}

 function cargardatos(){
    const usuario=JSON.parse(localStorage.getItem("usuarioLogueado"))
    document.getElementById("documento").innerText=usuario.documento
    document.getElementById("nombreUsuario").innerText=usuario.nombreUsuario
    document.getElementById("contactoTelefonico").innerText=usuario.contactoTelefonico
    document.getElementById("categoria").innerText=usuario.categoria
    document.getElementById("entrenador").innerText=usuario.entrenador
    document.getElementById("division").innerText=usuario.division
}
function abrirFixture(){
  document.getElementById("modal").showModal();
}
function cerrarFixture(){
  document.getElementById("modal").close();

}



 