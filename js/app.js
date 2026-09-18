// ======================================================
// DWEC - PRIMERA APLICACIÓN JAVASCRIPT
// ======================================================


// Mostramos un mensaje en la consola del navegador.
// Nos sirve para comprobar que el archivo app.js
// se ha cargado y ejecutado correctamente.
console.log("Aplicación iniciada correctamente");



// ======================================================
// 1. SELECCIONAMOS LOS ELEMENTOS DEL DOM
// ======================================================

// document representa el documento HTML cargado
// actualmente en el navegador.
//
// querySelector() permite buscar un elemento del DOM
// utilizando un selector CSS.
//
// El símbolo # significa que buscamos un elemento por su ID.
//
// En HTML tenemos:
// <input id="nombre">
//
// Por eso utilizamos:
// "#nombre"

const inputNombre = document.querySelector("#nombre");


// Seleccionamos el botón:
// <button id="botonSaludar">
const botonSaludar = document.querySelector("#botonSaludar");


// Seleccionamos el botón:
// <button id="botonReiniciar">
const botonReinicar = document.querySelector("#botonReiniciar");


// Seleccionamos el párrafo:
// <p id="mensaje">
const mensaje = document.querySelector("#mensaje");



// ======================================================
// 2. COMPROBAMOS LOS ELEMENTOS EN LA CONSOLA
// ======================================================

// Mostramos los elementos encontrados.
//
// Esto es útil para comprobar que querySelector()
// ha encontrado correctamente los elementos.
//
// Si no encuentra un elemento, querySelector()
// devuelve null.

console.log(inputNombre);
console.log(botonSaludar);
console.log(mensaje);



// ======================================================
// 3. EVENTO DEL BOTÓN SALUDAR
// ======================================================

// addEventListener() permite indicar qué queremos que ocurra
// cuando se produce un determinado evento.
//
// En este caso escuchamos el evento "click".
//
// Cuando el usuario pulse el botón se ejecutará
// la función que aparece entre { }.

botonSaludar.addEventListener("click", () => {


    // --------------------------------------------------
    // OBTENEMOS EL NOMBRE
    // --------------------------------------------------

    // .value obtiene el contenido escrito dentro del input.
    //
    // Por ejemplo:
    //
    // Si el usuario escribe:
    //
    //      Pedro
    //
    // inputNombre.value será:
    //
    //      "Pedro"
    //
    // trim() elimina los espacios existentes
    // al principio y al final del texto.
    //
    // "   Pedro   ".trim()
    //
    // devuelve:
    //
    // "Pedro"

    const nombre = inputNombre.value.trim();


    // Mostramos el nombre en la consola para comprobar
    // el valor que hemos obtenido.

    console.log("Nombre introducido: ", nombre);



    // --------------------------------------------------
    // 4. VALIDAMOS EL NOMBRE
    // --------------------------------------------------

    // Comprobamos si el nombre es exactamente
    // una cadena de texto vacía.
    //
    // === realiza una comparación estricta.
    //
    // Si nombre contiene:
    //
    // ""
    //
    // significa que el usuario no ha escrito nada.

    if (nombre === "") {


        // Modificamos el contenido textual del párrafo
        // seleccionado anteriormente.
        //
        // HTML:
        //
        // <p id="mensaje">
        //
        // JavaScript:
        //
        // mensaje.textContent = ...

        mensaje.textContent =
            "Debes de introducir un nombre";


        // return termina inmediatamente la ejecución
        // de esta función.
        //
        // Por tanto, si el nombre está vacío,
        // NO se ejecutará el código que aparece después.

        return;
    }



    // --------------------------------------------------
    // 5. MOSTRAMOS EL SALUDO
    // --------------------------------------------------

    // Utilizamos template literals.
    //
    // Se escriben utilizando `backticks`.
    //
    // ${nombre} permite insertar el valor
    // de la variable dentro del texto.

    mensaje.textContent =
        `¡Hola, ${nombre}! Bienvenid@`;



    // --------------------------------------------------
    // 6. MODIFICAMOS UNA CLASE CSS
    // --------------------------------------------------

    // classList permite trabajar con las clases CSS
    // de un elemento.
    //
    // add() añade una clase.
    //
    // Si nuestro CSS contiene:
    //
    // .destacado {
    //     color: green;
    //     font-weight: bold;
    // }
    //
    // esta instrucción hará que el mensaje
    // utilice esos estilos.

    mensaje.classList.add("destacado");


});



// ======================================================
// 7. EVENTO DEL BOTÓN REINICIAR
// ======================================================

// Escuchamos ahora el evento click de otro botón.

botonReinicar.addEventListener("click", () => {


    // Vaciamos el contenido del input.
    //
    // Antes:
    //
    // [ Pedro        ]
    //
    // Después:
    //
    // [              ]

    inputNombre.value = "";


    // Restauramos el texto original del mensaje.

    mensaje.textContent =
        "Aquí aparecerá el mensaje";


    // Eliminamos la clase CSS "destacado".
    //
    // add()    → añade una clase
    // remove() → elimina una clase

    mensaje.classList.remove("destacado");


    // focus() coloca el cursor nuevamente
    // dentro del campo de texto.
    //
    // De esta forma el usuario puede comenzar
    // a escribir inmediatamente.

    inputNombre.focus();

});






/*
inputNombre.addEventListener("keydown", (evento) => {

    // El evento "keydown" se produce cuando
    // el usuario pulsa una tecla.
    //
    // El objeto "evento" contiene información
    // sobre la tecla pulsada.
    //
    // evento.key nos indica qué tecla fue.

    if (evento.key === "Enter") {

        // Aquí queremos llamar a una función
        // encargada de realizar el saludo.

        Saludar();

    }

});
*/