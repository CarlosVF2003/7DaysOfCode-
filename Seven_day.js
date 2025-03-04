// Funciones para cada operación
function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    alert("Error: División por cero.");
    return null;
  }
  return a / b;
}

// Función principal de la calculadora
function calculadora() {
  let salir = false;
  
  while (!salir) {
    let operacion = prompt(
      "Calculadora:\n" +
      "Elige una opción:\n" +
      "1. Suma\n" +
      "2. Resta\n" +
      "3. Multiplicación\n" +
      "4. División\n" +
      "5. Salir"
    );
    if (!operacion) break;
    operacion = operacion.trim().toLowerCase();
    
    // Si el usuario decide salir
    if (operacion === "5" || operacion === "salir") {
      alert("Hasta la próxima.");
      salir = true;
      break;
    }
    
    // Pedir los números a operar
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    
    if (isNaN(num1) || isNaN(num2)) {
      alert("Por favor, ingresa números válidos.");
      continue;
    }
    
    let resultado;
    switch (operacion) {
      case "1":
      case "suma":
        resultado = suma(num1, num2);
        break;
      case "2":
      case "resta":
        resultado = resta(num1, num2);
        break;
      case "3":
      case "multiplicación":
      case "multiplicacion":
        resultado = multiplicacion(num1, num2);
        break;
      case "4":
      case "división":
      case "division":
        resultado = division(num1, num2);
        break;
      default:
        alert("Opción no válida. Intenta nuevamente.");
        continue;
    }
    
    if (resultado !== null) {
      alert("El resultado es: " + resultado);
    }
  }
}

calculadora();
