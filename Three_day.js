// Día 3: Aventura interactiva en el mundo de la programación

// Funciones auxiliares para obtener input y mostrar alertas
const getInput = (mensaje) => prompt(mensaje);
const showAlert = (mensaje) => alert(mensaje);

// 1. Selecciona tu área
let area = getInput("Elige tu destino:\nEscribe 'Front' para Front-End o 'Back' para Back-End");
area = area ? area.trim().toLowerCase() : "";

let opcionTecnologia;

if (area === "front") {
  opcionTecnologia = getInput("¡Excelente! Has elegido Front-End.\n¿Qué quieres aprender? Escribe 'React' o 'Vue'.");
} else if (area === "back") {
  opcionTecnologia = getInput("Genial, has elegido Back-End.\n¿Qué quieres aprender? Escribe 'C#' o 'Java'.");
} else {
  showAlert("No elegiste un área válida. Por defecto, te asignaremos a Front-End.");
  area = "front";
  opcionTecnologia = getInput("¿Qué quieres aprender en Front-End? Escribe 'React' o 'Vue'.");
}

// 2. Elige tu futuro profesional
let futuro = getInput("Ahora, ¿quieres especializarte en este camino o convertirte en Fullstack?\nEscribe 'especializarme' o 'fullstack'");
futuro = futuro ? futuro.trim().toLowerCase() : "";

if (futuro === "especializarme") {
  showAlert("¡Buena elección! Especializarte te permitirá profundizar tus conocimientos.");
} else if (futuro === "fullstack") {
  showAlert("¡Ambicioso! Convertirte en Fullstack te abrirá muchas puertas.");
} else {
  showAlert("Respuesta no reconocida. Continuaremos con el camino elegido.");
}

// 3. Agrega otras tecnologías de interés
let otraTec = getInput("¿Hay alguna otra tecnología que te gustaría aprender?\nSi es así, escríbela; si no, escribe 'no'");

while (otraTec && otraTec.trim().toLowerCase() !== "no") {
  showAlert(`Interesante, "${otraTec.trim()}" es una excelente opción para ampliar tus horizontes.`);
  otraTec = getInput("¿Hay alguna otra tecnología que te gustaría aprender?\nSi no, escribe 'no'");
}

showAlert("Gracias por jugar. ¡Buena suerte en tu camino de aprendizaje!");
