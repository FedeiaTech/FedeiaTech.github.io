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

// ------Sonidos-------
function playSelect() {
  var audio = new Audio("./publics/fx/select.mp3");
  audio.play();
}

function playSign() {
  var audio = new Audio("./publics/fx/sign.mp3");
  audio.play();
}

//------------Descripcion de imagenes (td-icons)--------------------
//-----modal----//
function mostrarModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add("visible");
}

function cerrarModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("visible");
}

const imagen1 = document.querySelector("#td-1 img");
imagen1.addEventListener("click", function() {
  mostrarModal("modal-1");
});

const imagen2 = document.querySelector("#td-2 img");
imagen2.addEventListener("click", function() {
  mostrarModal("modal-2");
});

const imagen3 = document.querySelector("#td-3 img");
imagen3.addEventListener("click", function() {
  mostrarModal("modal-3");
});

const imagen4 = document.querySelector("#td-4 img");
imagen4.addEventListener("click", function() {
  mostrarModal("modal-4");
});

const imagen5 = document.querySelector("#td-5 img");
imagen5.addEventListener("click", function() {
  mostrarModal("modal-5");
});

const modals = document.querySelectorAll(".modal");

for (const modal of modals) {
  const contenidoModal = modal.querySelector(".contenido-modal");
  contenidoModal.addEventListener("click", function() {
    cerrarModal(modal.id);
  });
  
  modal.addEventListener("click", function(event) {
    if (event.target === modal) {
      cerrarModal(modal.id);
    }
  });
}