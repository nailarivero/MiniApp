// simulacion de la bd
const tareasGuardadas = [];

function guardarTarea(tarea) {
  tareasGuardadas.push(tarea);
}
  // Escalabilidad: en un futuro se podría guardar en una base de datos real.
  // Mantenibilidad: se puede reemplazar esta función sin tocar backend o frontend.
  // Seguridad: esta capa no expone directamente los datos al usuario.
