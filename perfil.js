const boton = document.getElementById('btncuotas');
const lista = document.getElementById('miLista');
function mostrar(){
  // Cambiar el texto del botón si querés
  if (lista.classList.contains('oculto')) {
    boton.textContent = 'Mostrar cuotas';
  } else {
    boton.textContent = 'Ocultar cuotas';
  }
}
const usuariosd =[
    {
        nombreUsuario: "facundogigena",
        documento:"333333",
        contactoTelefonico:"3511234567",
        pass:"juan008",
        categoria:"U21",
        entrenador:"Alvaro Imaz",
    }
 ];
 function cargardatos(){
    const usuario=JSON.parse(localStorage.getItem("usuarioLogueado"))
    document.getElementById("documento").innerText=usuario.documento
    document.getElementById("nombreUsuario").innerText=usuario.nombreUsuario
    document.getElementById("contactoTelefonico").innerText=usuario.contactoTelefonico
    document.getElementById("categoria").innerText=usuario.categoria
    document.getElementById("entrenador").innerText=usuario.entrenador
}



 