// simulacion de la bd
const tareasGuardadas = []; //crea la lista donde se van a guardar las tareas

function guardarTarea(tarea) { //declara la fucnion que va a recibir la tarea
  tareasGuardadas.push(tarea); //agrega la tarea 
}
  // Escalabilidad: en un futuro se podría guardar en una base de datos real.
  // Mantenibilidad: se puede reemplazar esta función sin tocar backend o frontend.
  // Seguridad: esta capa no expone directamente los datos al usuario.
