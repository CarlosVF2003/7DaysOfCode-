// Día 3: Aventura interactiva en el mundo de la programación

// 1. Elige tu área
let area = prompt("Elige tu destino:\nEscribe 'Front' para Front-End o 'Back' para Back-End");

let opcionTecnologia;

// Validamos la elección de área y preguntamos por la tecnología
if (area && area.toLowerCase() === "front") {
  opcionTecnologia = prompt("¡Excelente! Has elegido Front-End.\n¿Qué quieres aprender? Escribe 'React' o 'Vue'.");
} else if (area && area.toLowerCase() === "back") {
  opcionTecnologia = prompt("Genial, has elegido Back-End.\n¿Qué quieres aprender? Escribe 'C#' o 'Java'.");
} else {
  alert("No elegiste un área válida. Por defecto, te asignaremos a Front-End.");
  area = "front";
  opcionTecnologia = prompt("¿Qué quieres aprender en Front-End? Escribe 'React' o 'Vue'.");
}

// 2. Elige tu futuro profesional
let futuro = prompt("Ahora, ¿quieres especializarte en este camino o convertirte en Fullstack?\nEscribe 'especializarme' o 'fullstack'");

if (futuro && futuro.toLowerCase() === "especializarme") {
  alert("¡Buena elección! Especializarte te permitirá profundizar tus conocimientos.");
} else if (futuro && futuro.toLowerCase() === "fullstack") {
  alert("¡Ambicioso! Convertirte en Fullstack te abrirá muchas puertas.");
} else {
  alert("Respuesta no reconocida. Continuaremos con el camino elegido.");
}

// 3. Agrega otras tecnologías de interés
let otraTec = prompt("¿Hay alguna otra tecnología que te gustaría aprender?\nSi es así, escríbela; si no, escribe 'no'");

while (otraTec && otraTec.toLowerCase() !== "no") {
  alert("Interesante, " + otraTec + " es una excelente opción para ampliar tus horizontes.");
  otraTec = prompt("¿Hay alguna otra tecnología que te gustaría aprender?\nSi no, escribe 'no'");
}

alert("Gracias por jugar. ¡Buena suerte en tu camino de aprendizaje!");
