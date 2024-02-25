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
  // Función para actualizar la imagen según el modo
  function updateImage() {
    if (body.classList.contains("dark-mode")) {
      imagen.src = "./publics/img/sign1.png";
    } else {
      imagen.src = "./publics/img/sign2.png";
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
