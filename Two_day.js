// Día 2: Personalizando la experiencia del usuario

// Solicitar datos al usuario
const nombre = prompt("¿Cuál es tu nombre?");
const edad = prompt("¿Cuántos años tienes?");
const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

// Mostrar mensaje personalizado
alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

// Ejercicio opcional: preguntar si le gusta estudiar el lenguaje
const respuesta = prompt(`¿Te gusta estudiar ${lenguaje}? Escribe 1 para SÍ o 2 para NO.`);

if (respuesta === "1") {
  alert("¡Genial! Sigue así y verás grandes resultados.");
} else if (respuesta === "2") {
  alert("Vaya, quizás es momento de probar con otro lenguaje.");
} else {
  alert("No se entiende la respuesta. Por favor, escribe 1 o 2.");
}
