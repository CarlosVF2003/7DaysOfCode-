// Día 5: Lista de Compras Interactiva

// Objeto para almacenar los alimentos agrupados por categoría
const shoppingList = {
  Frutas: [],
  Lácteos: [],
  Congelados: [],
  Dulces: []
};

// Función para normalizar la categoría (primera letra en mayúscula)
const normalizeCategory = (cat) => {
  cat = cat.trim().toLowerCase();
  return cat.charAt(0).toUpperCase() + cat.slice(1);
};

// Preguntar si se desea agregar un alimento
let addMore = prompt("¿Deseas agregar un alimento a tu lista de compras? (sí/no)").trim().toLowerCase();

while (addMore === "sí" || addMore === "si") {
  // Solicitar el alimento
  let item = prompt("¿Qué alimento deseas agregar?").trim();

  // Preguntar en qué categoría se encaja el alimento, mostrando opciones predefinidas
  let category = prompt(
    "¿En qué categoría se encaja ese alimento?\nOpciones: Frutas, Lácteos, Congelados, Dulces\n(O escribe otra categoría si lo prefieres)"
  );
  
  category = normalizeCategory(category);
  
  // Si la categoría no existe en la lista, la creamos
  if (!shoppingList[category]) {
    shoppingList[category] = [];
  }
  
  // Agregar el alimento a la categoría correspondiente
  shoppingList[category].push(item);
  
  // Preguntar si se desea agregar otro alimento
  addMore = prompt("¿Deseas agregar otro alimento? (sí/no)").trim().toLowerCase();
}

// Generar el resumen de la lista de compras
let result = "Lista de compras:\n";
for (let cat in shoppingList) {
  result += `${cat}: `;
  result += shoppingList[cat].length ? shoppingList[cat].join(", ") : "Ninguno";
  result += "\n";
}

// Mostrar la lista final
alert(result);
