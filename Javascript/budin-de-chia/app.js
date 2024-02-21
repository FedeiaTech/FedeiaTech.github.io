/*ALGUNAS SENTENCIAS JAVASCRIPT*/

// Ciertos elementos estan comentados para preservar su funcionalidad original


//Eventos del DOM
//Desde HTML
//Cada elemento de 'Toppings a eleccion' ha sido vinculada a una funcion del html - al hacer Click
//Avena
//Frutos rojos
//Citricos

//Desde el html, se establece un nombre(string) que luego sera enviado a la funcion llamada

//Funciones
function funcionObjeto(objeto) {
    console.log(objeto);   //la funcion recibe los parametros definidos en html (esta funcion es invocada en html), de no recibir argumentos, muestra caracteristicas del objeto
}

function objetoTipoTarget(objeto) {
    console.log(objeto.target);   //la funcion mostrara el contenido target del objeto
}

function objetoTargetTexto(objeto) {
    console.log(objeto.target.innerText);   //la funcion mostrara el texto del target
}

function mensajeYogur() {
    console.log('Es muy bueno');   //la funcion mostrara un mensaje
}

//addEventListener()
//Desde javascript - establecemos el evento a escuchar y llamamos la funcion a ejecutarse

//Pasar mouse por encima de 'Yogur Griego'
const clickYogur = document.getElementById('yogur'); //llama de nuevo al id 'yogur', le asigna un nombre al evento - clickYogur
clickYogur.addEventListener('mouseover', mensajeYogur); //el evento es llamado al ejecutar determinada accion (mouse por encima del texto, funcion) - Mensaje "Es muy bueno"

//Click en 'Yogur Griego'
const clickIngrediente = document.getElementById('yogur'); //llama al id 'yogur', le asigna un evento - clickIngrediente
clickIngrediente.addEventListener('click', funcionObjeto); //el evento es llamado al ejecutar determinada accion - (accion de clic, nombreDeLaFuncion) como no esta definido el argumento mostrara un 'pointerEvent' con caracteristicas del evento

//Click en el titulo
const clickTitulo = document.getElementById('title'); //llama al id 'title', le asigna el evento - clickTitulo
clickTitulo.addEventListener('click', objetoTipoTarget); //al hacer click en h1, el evento ejecuta la funcion - Mostrara el id del objetivo, "title"

//Doble click en el titulo
const dobleClickTitulo = document.getElementById('title'); //llama al id 'title', le asigna el evento - clickTitulo
dobleClickTitulo.addEventListener('dblclick', objetoTargetTexto); //al hacer 'doble click' en 'h1', el evento ejecuta la funcion - Mostrara el texto del objetivo, "Postre de chia"

//Obtener todos los elementos
const allIngredients = document.getElementsByClassName('ingredient');
//utilizando un 'for of' se puede traer la lista completa de los elementos
for (const ingredient of allIngredients) {
    console.log(ingredient);
}
