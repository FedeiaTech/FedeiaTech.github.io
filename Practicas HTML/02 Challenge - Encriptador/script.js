function encriptar() {
  // Declaracion //
  //se define una variable constante llamada mensaje que almacena el valor del textarea con el ID "mensaje". La propiedad 'value' devuelve el texto que se ha introducido en el textarea.
  const mensaje = document.getElementById("mensaje").value;
  const resultado = document.getElementById("resultado");

  // Convertir letras //
  //Se define una variable constante llamada mensajeEncriptado que almacena el resultado de encriptar el mensaje original.
  //La función replace() se utiliza para reemplazar todas las ocurrencias de las letras "e", "i", "a", "o" y "u" por las cadenas "enter", "imes", "ai", "ober" y "ufat", respectivamente.
  //La bandera g en la expresión regular indica que se deben reemplazar todas las ocurrencias de la letra, no solo la primera.
  //La bandera i indica que la comparación de letras no debe ser sensible a las mayúsculas y minúsculas.
  const mensajeEncriptado = mensaje
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  // Mostrar resultado //
  // Se establece el contenido del <td> con el ID "resultado" al mensaje encriptado. La propiedad textContent se utiliza para obtener o establecer el contenido textual de un elemento.
  resultado.textContent = mensajeEncriptado;
}

function desencriptar() {
  const mensaje = document.getElementById("mensaje").value;
  const resultado = document.getElementById("resultado");

  // Convertir letras
  const mensajeDesencriptado = mensaje
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  // Mostrar resultado
  resultado.textContent = mensajeDesencriptado;
}

function copiarTexto() {
  // Se define una variable constante llamada resultado que almacena el <td> con el ID "resultado".
  const resultado = document.getElementById("resultado");
  // Se define una variable constante llamada info que almacena el elemento p con el ID "info"
  const info = document.getElementById("info");

  // Seleccionar el texto //
  // Estas líneas de código se encargan de seleccionar el texto del <td> para poder copiarlo al portapapeles.
  // La variable seleccion se utiliza para almacenar la selección actual del usuario.
  // Se crea un nuevo rango (rango) que abarca todo el contenido del <td> (resultado).
  // Se elimina la selección actual y se agrega el nuevo rango a la selección.
  const seleccion = document.getSelection();
  const rango = document.createRange();
  rango.selectNodeContents(resultado);
  seleccion.removeAllRanges();
  seleccion.addRange(rango);

  // Copiar al portapapeles //
  // Se utiliza el método execCommand para copiar el texto seleccionado al portapapeles.
  // Si se ejecuta correctamente, se modifica el contenido del elemento info para mostrar un mensaje que indica que el texto se ha copiado al portapapeles.
  // Si se produce un error al copiar el texto, se modifica el contenido del elemento info para mostrar un mensaje de error.
  try {
    document.execCommand("copy");
    info.textContent = "¡Texto copiado al portapapeles!";
  } catch (err) {
    info.textContent = "Error al copiar el texto al portapapeles.";
  }

  // Deseleccionar el texto
  // Se elimina la selección actual del usuario para que no se vea afectado el resto del contenido de la página.
  seleccion.removeAllRanges();
}


function borrarTexto() {
    const mensaje = document.getElementById("mensaje");
    const resultado = document.getElementById("resultado");
  
    // Borrar el contenido del textarea
    mensaje.value = "";
  
    // Reemplazar el contenido del <td>
    resultado.textContent = "Ningún mensaje fue encontrado.";
  }