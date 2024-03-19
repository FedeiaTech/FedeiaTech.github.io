// -------------Cover de la pagina----------------
// const contenedor = document.querySelector(".figcaption");
// const cover = document.querySelector(".cover");

// cover.onload = function() {
//   const anchoContenedor = figcaption.clientWidth;
//   const altoContenedor = figcaption.clientHeight;

//   cover.style.width = anchoContenedor + "px";
//   cover.style.height = altoContenedor + "px";
// };

// -------------Desplazamiento suave--------------
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const headerOffset = 100;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollBy({ 
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  /* ----Formulario----(inactivo)*/
  /*
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Aquí puedes procesar los datos del formulario, como enviarlos a un servidor o guardarlos en una base de datos.
    console.log("Formulario enviado:", Object.fromEntries(formData));
    // Aquí puedes mostrar un mensaje de éxito o redirigir a otra página.
    alert("Formulario enviado con éxito");
    event.target.reset();
  });
*/

  //--------------- Modo oscuro ------------------
  const darkModeToggle = document.getElementById("sign");
  const body = document.body;
  const imagen = document.getElementById("sign");
  const imagenFondo = document.getElementById("img-fondo");
  // Función para actualizar la imagen según el modo
  function updateImage() {
    if (body.classList.contains("dark-mode")) {
      imagen.src = "./publics/img/sign1.png";
      imagenFondo.src = "./publics/img/forest-night1.jpg";
    } else {
      imagen.src = "./publics/img/sign2.png";
      imagenFondo.src = "./publics/img/forest-day.jpg";
    }
  }
  // Verifica si el usuario ha preferido el modo oscuro en su sistema
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  // Si ya está en modo oscuro, cambia la apariencia predeterminada del sitio
  if (prefersDarkScheme) {
    body.classList.add("dark-mode");
    updateImage(); //llama a la funcion de cambiar imagen
  }
  // Cambia entre modos claro y oscuro cuando se hace clic en el botón
  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    updateImage();
  });
});

// ------Sonidos-------(Activados desde el HTML)
function playSelect() {
  var audio = new Audio("./publics/fx/select.mp3");
  audio.play();
}

function playSign() {
  var audio = new Audio("./publics/fx/sign.mp3");
  audio.play();
}

//------------Descripcion de Iconos (td-icons)--------------------
//-----modal----//
/*
EJEMPLO DEL PRIMER ITEM
<!-- Primer item -->
            <td class="td-icon" id="td-1">
              <!-- Icono -->
              <img src="./publics/img/jewel-icon.png" alt="diamond" class="icon" />
              <!-- Modal -->
              <div class="modal" id="modal-1">
                <div class="modal-title">
                  <!-- Titulo -->
                  <h2>Info</h2>
                  <div class="contenido-modal">
                    <img class="modal-icon" src="./publics/img/jewel-icon.png" alt="diamond icon">
                    <p>Los contenidos con la propiedad "Diamante" simbolizan una página web con resultados excepcionales
                    </p>
                    <p class="more-info">Presiona para cerrar</p>
                  </div>
                </div>
              </div>
            </td>
*/

function mostrarModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add("visible");
} //Busca un elemento en el documento con el ID proporcionado (id) y lo asigna a la variable modal.
  //Agrega la clase CSS "visible" al elemento modal, lo que generalmente lo hace visible en la pantalla.


function cerrarModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("visible");
} //Busca un elemento en el documento con el ID proporcionado (id) y lo asigna a la variable modal.
  //Elimina la clase CSS "visible" del elemento modal, lo que generalmente lo oculta de la pantalla.


const tdImges = document.querySelectorAll("td img");
//Selecciona todas las imágenes dentro de elementos "td" de forma genérica, evitando la selección manual de cada imagen por separado (imagen1, imagen2, etc.). Esto hace que el código sea más adaptable a cambios en la estructura HTML.

tdImges.forEach(imagen => {
  //Recorre todas las imágenes encontradas y agrega event listeners a cada una de ellas de forma dinámica, reduciendo la repetición de código y mejorando la mantenibilidad.
  imagen.addEventListener("click", () => {
    //Obtiene el ID del modal a mostrar directamente del ID del elemento "td" padre de la imagen, eliminando la necesidad de condicionales o código adicional.
    mostrarModal(`modal-${imagen.parentElement.id.split("-")[1]}`);
  });
});

const modals = document.querySelectorAll(".modal");

modals.forEach(modal => {   //Recorre todos los modales y agrega event listeners de cierre de forma dinámica, evitando la repetición.
  const contenidoModal = modal.querySelector(".contenido-modal");
  modal.addEventListener("click", (event) => {
    if (event.target != modal || event.target === contenidoModal) {
    //Combina la comprobación del click en el propio modal y en su contenido en un solo if, simplificando el código.
      cerrarModal(modal.id);
    }
  });
});
