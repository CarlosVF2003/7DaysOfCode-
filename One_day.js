// Día 1: Operadores de comparación - Versión refactorizada

// Declaración de variables (usamos const porque sus valores no cambian)
const numeroUn = 1;
const stringUn = '1';

const numeroTreinta = 30;
const stringTreinta = '30';

const numeroDiez = 10;
const stringDiez = '10';

// Función que recibe dos valores, una condición de comparación y los mensajes a mostrar
function compararVariables(a, b, condicion, mensajeCorrecto, mensajeIncorrecto) {
  if (condicion(a, b)) {
    console.log(mensajeCorrecto);
  } else {
    console.log(mensajeIncorrecto);
  }
}

// Condiciones de comparación definidas como funciones
// Para comparación con conversión implícita (==) y verificación de que los tipos sean diferentes
const comparacionLoose = (a, b) => a == b && typeof a !== typeof b;
// Para comparación estricta (===) que verifica valor y tipo
const comparacionStrict = (a, b) => a === b;

// Ejercicio 1: Usamos comparación loose
compararVariables(
  numeroUn,
  stringUn,
  comparacionLoose,
  `Las variables ${numeroUn} y '${stringUn}' tienen el mismo valor, pero son de tipos diferentes.`,
  `Las variables ${numeroUn} y '${stringUn}' no cumplen la condición esperada.`
);

// Ejercicio 2: Usamos comparación strict
compararVariables(
  numeroTreinta,
  stringTreinta,
  comparacionStrict,
  `Las variables ${numeroTreinta} y '${stringTreinta}' tienen el mismo valor y el mismo tipo.`,
  `Las variables ${numeroTreinta} y '${stringTreinta}' no tienen el mismo valor y tipo.`
);

// Ejercicio 3: De nuevo, comparación loose
compararVariables(
  numeroDiez,
  stringDiez,
  comparacionLoose,
  `Las variables ${numeroDiez} y '${stringDiez}' tienen el mismo valor, pero son de tipos diferentes.`,
  `Las variables ${numeroDiez} y '${stringDiez}' no cumplen la condición esperada.`
);
