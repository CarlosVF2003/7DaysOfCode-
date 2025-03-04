// Día 6: ¡Ahora puedes eliminar elementos de tu lista de compras!

// Array para almacenar la lista de compras
let shoppingList = [];

// Función para mostrar la lista actual de manera formateada
const mostrarLista = () => {
  if (shoppingList.length === 0) {
    alert("La lista está vacía.");
  } else {
    alert("Elementos en la lista:\n" + shoppingList.join(", "));
  }
};

// Función principal que gestiona el ciclo de interacción
const iniciarPrograma = () => {
  let continuar = true;
  
  while (continuar) {
    // Si hay elementos, se ofrece la opción de eliminar
    let mensaje = "¿Deseas modificar tu lista de compras?\nEscribe 'añadir' para agregar, 'eliminar' para quitar o 'salir' para terminar.";
    let accion = prompt(mensaje);
    if (!accion) break;
    accion = accion.trim().toLowerCase();

    if (accion === "añadir") {
      let alimento = prompt("¿Qué alimento deseas agregar?");
      if (alimento) {
        shoppingList.push(alimento.trim());
        alert(`Se agregó "${alimento.trim()}" a la lista.`);
      }
    } else if (accion === "eliminar") {
      if (shoppingList.length === 0) {
        alert("No hay elementos para eliminar.");
      } else {
        mostrarLista();
        let eliminarItem = prompt("¿Qué elemento deseas eliminar?");
        if (eliminarItem) {
          eliminarItem = eliminarItem.trim();
          if (shoppingList.includes(eliminarItem)) {
            const index = shoppingList.indexOf(eliminarItem);
            shoppingList.splice(index, 1);
            alert(`Se eliminó "${eliminarItem}" de la lista.`);
          } else {
            alert("¡No fue posible encontrar el elemento en la lista!");
          }
        }
      }
    } else if (accion === "salir") {
      continuar = false;
    } else {
      alert("Opción no válida. Por favor, escribe 'añadir', 'eliminar' o 'salir'.");
    }
  }
  
  // Mostrar la lista final
  mostrarLista();
  alert("Programa finalizado. ¡Gracias por usar la lista de compras!");
};

// Iniciar el programa
iniciarPrograma();
