/*ALGUNAS SENTENCIAS JAVASCRIPT*/

// Ciertos elementos estan comentados para preservar su funcionalidad original


//Estadisticas de un elemento completa por id
const container = document.getElementById('container');
console.log(container); //devuelve todas las caracteristicas del objeto


//Estadisticas especificas de un elemento por id - devolviendo propiedades
const title = document.getElementById('title'); //crea la constante a traves de un elemento etiquetado por id, en caso que haya mas de un id selecciona el 1ro

console.log(typeof title); //innerText devuelve el tipo de elemento
console.log(title.innerText); //innerText devuelve el texto interno
console.log(title.tagName); //devuelve la etiqueta
console.log(title.innerHTML); //devuelve la el contenido html


//Estadisticas completa de un elemento por clase - ClassName
const toppings = document.getElementsByClassName('topping'); //la constante deberia declararse en plural siendo que la componen mas de un elemento

console.log(toppings); //devuelve todas las caracteristicas del objeto, en este caso son 4 correspondiente a los ingredientes
//los elementos se enumeran en forma de array
console.log(toppings.length); //devuelve el numero de elementos
console.log(toppings[0]); //devuelve propiedades solo del primer elemento
console.log(toppings[0].id); //devuelve el id solo del primer elemento - cebolla

const toppingMarron = document.getElementsByClassName('bkg-brown'); //pasamos el nombre de la sub-clase
console.log(toppingMarron); //devuelve los 2 elementos con el nombre de la clase - color marron


//Estadisticas completas de un elemento por su tipo - TagName
const misToppings = document.getElementsByTagName('li'); //los elementos son seleccionados por el tipo de elemento - si tuviese un id con el mismo nombre tambien seria seleccionado
console.log(misToppings); //devuelve todas las caracteristicas del objeto, en este caso son 4 correspondiente a los ingredientes
//los elementos se numeran en forma de array

//---------------------------------
//Selectores
//Selector de un elemento por criterio - querySelector
const cebolla = document.querySelector('#cebolla');
console.log(cebolla); //selecciona el elemento con el id - cebolla

const primerTopping = document.querySelector('.topping');
console.log(primerTopping);  //solo selecciona el primer elemento con la clase topping - cebolla
console.log(typeof primerTopping);   //muestra el tipo solo del primer elemento - cebolla

const primerToppingNaranja = document.querySelector('.topping.bkg-orange');
console.log(primerToppingNaranja);  //solo selecciona el primer elemento con la clase topping y color naranja - tomate

const primerToppingNaranjaCompleto = document.querySelector('ul li.bkg-orange');
console.log(primerToppingNaranjaCompleto);  //solo selecciona el primer elemento de una 'ul', en el nodo 'li' y color naranja - tomate

const primerToppingNoMarron = document.querySelector('ul li:not(.bkg-brown)');
console.log(primerToppingNoMarron);  //solo selecciona el primer elemento de una 'ul', en el nodo 'li' y no marron (color naranja) - tomate


//Selector de todos los elementos por criterio - querySelectorAll
const toppingsMarron = document.querySelectorAll('.topping.bkg-brown');
console.log(toppingsMarron); //retornara una coleccion de nodos con la clase topping y color marron - cebolla y lechuga
console.log(toppingsMarron.length); //largo de la coleccion 
console.log(typeof toppingsMarron); //la lista se considera un objeto en js


//------------------------------
//Personalizacion
//Personalizar el Estilo con JS
const modTopping = document.querySelector('.topping');
console.log(modTopping.style); //accede a la declaracion de estilos del elemento - cebolla

// modTopping.style.backgroundColor = 'white'; //cambiara el color de fondo al elemento - fondo blanco
// modTopping.style.color = 'red'; //cambiara el color al elemento - rojo
// modTopping.style.textTransform = 'uppercase'; //cambiara el estilo del texto - mayusculas


//Contenido interno de un elemento con texto
const listaDeTopping = document.getElementById('topping-list');
console.log(listaDeTopping.innerText); //retorna una cadena de caracteres
console.log(listaDeTopping.textContent); //ademas incluye los espacios que tiene indentado
console.log(listaDeTopping.innerHTML); //retorna toda la estructura HTML y texto

//Modificar el contenido del texto
const titulo = document.getElementById('title');
//titulo.innerText = 'Ingredientes de las hamburguesas'; //cambiara el contenido de h1
const enlace = document.getElementsByTagName('a');
console.log(enlace[0].getAttribute('href')); //de la coleccion de links('a') retorna el primer atributo del enlace a donde dirije el link
//console.log(enlace[0].removeAttribute('href')); //borra el atributo del enlace a donde dirije el link
//console.log(enlace[0].setAttribute('href', 'https://www.google.com/')); //cambia el atributo del enlace a donde dirije el link - 'especifico el atributo', 'especifico el destino'

//Agregar, modificar y eliminar clases
console.log(primerTopping.classList); //retorna un array de todas las clases asignadas al elemento - 0: topping, 1: bkg-brown, length: 2, value: "topping bkg-brown"
primerTopping.classList.add('magic'); //agrega una clase a la lista - magic
console.log(primerTopping.classList); //retorna el nuevo array de todas las clases asignadas al elemento - 0: topping, 1: bkg-brown, 2: magic, length: 3, value: "topping bkg-brown magic" (vemos que JS opero de forma secuencial y el porque del color amarillo del texto 'cebolla' al tomar las propiedades de la plantilla de estilos)
console.log(primerTopping.classList.contains('topping')); //retorna el valor de verificar si contiene la clase mencionada - true
//primerTopping.classList.remove('topping'); //borrara la clase de la lista


//Crear un elemento
const toppingNuevo = document.createElement('li'); //crea un elemento nuevo del tipo 'li'
toppingNuevo.classList.add('topping', 'bkg-brown'); //propiedades de clase
toppingNuevo.innerText = 'Ketchup'; //propiedades de texto
listaDeTopping.append(toppingNuevo); //agrega un nodo a la lista - inserta el nuevo elemento dentro de la lista
toppingNuevo.remove(); //elimina el nuevo elemento - ketchup (comentar esta linea par ver el nuevo elemento)
//listaDeTopping.remove(); //elimina todos los elementos de la lista
//listaDeTopping.append('Texto agregado a la lista'); //ademas de agregar elementos, puede insertar texto


//---------------------------------
//Recorrer el DOM
console.log(listaDeTopping.parentNode); //retorna lista del elemento padre de 'listaDeTopping' incluye html, texto y comentarios - container
//Con esta referencia podemos trabajar exclusivamente con el elemento padre de manera indirecta
console.log(listaDeTopping.parentElement); //solo incluye html - container
console.log(listaDeTopping.parentElement.parentElement); //podemos ir incluso mas arriba - padre del padre - body

console.log(listaDeTopping.children); //lista de los elementos hijos de ese elemento - 4 elementos
console.log(listaDeTopping.firstChild); //retorna el primer 'nodo hijo' de ese elemento - al indentar, en este caso, solo vemos un texto vacio (espacios), correspondiente al primer nodo resultante
console.log(listaDeTopping.lastChild); //retorna el ultimo 'nodo hijo' de ese elemento - de igual manera esto devuelve un texto vacio
console.log(listaDeTopping.children[0]); //para evitar el inconveniente anterior accedemos referenciando el primer 'elemento hijo' de la lista con su ubicacion - cebolla
console.log(listaDeTopping.firstElementChild); //otra forma de acceder al primer 'elemento hijo' de la lista - cebolla
console.log(listaDeTopping.lastElementChild); //otra forma de acceder al ultimo 'elemento hijo' de la lista - palta

const link = document.getElementById('link');
console.log(link.previousElementSibling); //Accede al elemento anterior 'hermano' de este elemento - title
console.log(link.nextElementSibling); //Accede al elemento siguiente 'hermano' de este elemento - topping-list

//------------------------------------
