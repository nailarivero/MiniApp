// recibe una funcion, la valida y responde un mensaje
function backendRecibirTarea(tarea) {
    if (tarea.trim() === "") {
      return "Error: La tarea no puede estar vacía.";   // Seguridad: se valida el input (no vacío) antes de guardarlo.
    }
   // Mantenibilidad: la validación y la lógica están separadas del frontend.
    guardarTarea(tarea); // llama al "módulo" de base de datos
    return `Tarea guardada: ${tarea}`;  
  }
// Escalabilidad: se podría conectar a una api
