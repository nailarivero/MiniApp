// BACKEND
function backendRecibirTarea(tarea) {
    if (tarea.trim() === "") {
      return "Error: La tarea no puede estar vacía.";
    }
  
    guardarTarea(tarea); // Llama al "módulo" de base de datos
    return `Tarea guardada: ${tarea}`;
  }
  