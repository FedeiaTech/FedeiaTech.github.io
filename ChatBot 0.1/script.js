const chatLog = document.getElementById('chatLog');
const userInput = document.getElementById('userInput');

function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatLog.appendChild(messageElement);
}

function showOptions(options) {
  const optionsString = options.join(' / ');
  appendMessage('Hada', optionsString);
}

function endChat() {
  appendMessage('Hada', 'Hasta luego, ¡que tengas un buen descanso!');
  userInput.disabled = true;
}

function sendMessage() {
  const userMessage = userInput.value.trim().toLowerCase();
  userInput.value = '';

  switch (userMessage) {
    case '':
      break;
    case 'acompañar al hada por el bosque':
      appendMessage('Tú', userMessage);
      showOptions(['Revisar los arbustos', 'Correr']);
      break;
    case 'descansar':
      appendMessage('Tú', userMessage);
      endChat();
      break;
    case 'revisar los arbustos':
      appendMessage('Tú', userMessage);
      appendMessage('Hada', '¡Encontraste un lobo bebé! ¡Fin del chat!');
      userInput.disabled = true;
      break;
    case 'correr':
      appendMessage('Tú', userMessage);
      appendMessage('Hada', 'La bestia te atrapó. ¡Fin del chat!');
      userInput.disabled = true;
      break;
    default:
      appendMessage('Hada', 'No entiendo esa opción, por favor, elige entre las opciones proporcionadas.');
  }
}

// Mensaje de bienvenida inicial del Hada
appendMessage('Hada', '¡Hola! Soy el Hada del Bosque. ¿Qué deseas hacer?');
showOptions(['Acompañar al hada por el bosque', 'Descansar']);
