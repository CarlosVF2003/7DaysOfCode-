// Día 4: ¡Adivina el número!

// Generar un número secreto aleatorio entre 0 y 10 (incluyendo ambos)
const secretNumber = Math.floor(Math.random() * 11);
const maxAttempts = 3;
let guessedCorrectly = false;

for (let attempt = 1; attempt <= maxAttempts; attempt++) {
  let guessStr = prompt(`Intento ${attempt} de ${maxAttempts}:\nAdivina el número (entre 0 y 10):`);
  let guess = parseInt(guessStr);

  // Validamos que se ingrese un número
  if (isNaN(guess)) {
    alert("Por favor, ingresa un número válido.");
    attempt--; // No contar intentos inválidos
    continue;
  }

  // Comprobar si el usuario adivinó el número
  if (guess === secretNumber) {
    alert("¡Felicidades, adivinaste el número!");
    guessedCorrectly = true;
    break;
  } else {
    // Mostrar cuántos intentos quedan, si aún quedan
    if (attempt < maxAttempts) {
      alert(`Incorrecto. Te quedan ${maxAttempts - attempt} intento(s).`);
    }
  }
}

// Si se agotaron los intentos sin adivinar, se revela el número
if (!guessedCorrectly) {
  alert(`Lo siento, no adivinaste. El número correcto era ${secretNumber}.`);
}
