console.log("Aplicación iniciada correctamente");

//SELECCIONAR LOS ELEMENTOS DEL DOM

const inputNombre = document.querySelector("#nombre");
const botonSaludar = document.querySelector("#botonSaludar");
const mensaje = document.querySelector("#mensaje");

console.log(inputNombre);
console.log(botonSaludar);
console.log(mensaje);

//evento en el botón
botonSaludar.addEventListener("click", () => {
    //obtener el nombre
    const nombre =  inputNombre.value.trim();
    console.log("Nombre introducido: ", nombre);

    if (nombre === ""){
        mensaje.textContent = "Debes de introducir un nombre";
        return;
    }

} );


