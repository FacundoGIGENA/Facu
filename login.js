const usuariosd =[
    {
        nombreUsuario: "facundogigena",
        documento:"333333",
        contactoTelefonico:"3511234567",
        pass:"juan008",
        categoria:"U21",
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
        entrenador: "Lucía Gómez",
        cuotasAdeudadas: [
            "Octubre-2024 - Adeuda $100000",
            "Febrero-2024 - Adeuda $100000"
        ]
    }
 ];

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    login()
    });
function login(){
    let usuario = document.getElementById("documento").value;
    let nombre = document.getElementById("nombre").value;
    let password=document.getElementById("contraseña").value;

    const usuarioEncontrado = usuariosd.find(u =>
        u.documento == usuario &&
        u.pass == password &&
        u.nombreUsuario.toLowerCase().trim() == nombre
    );

    if (usuarioEncontrado) {
        // Guardamos los datos en localStorage
        localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioEncontrado));
        window.location.href = "paginamatienzoperfil.html";
        console.log(usuarioEncontrado)
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}


