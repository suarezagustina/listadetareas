function agregarTarea() {
  let tarea = document.getElementById("tarea").value
  let lista = document.getElementById("lista")
  let nuevaTarea = document.createElement("li")
  nuevaTarea.innerHTML =
    tarea +
    " <button type='button' class='ms-3 btn btn-danger btn-xs' onclick='eliminarTarea(this)'>Eliminar</button>"
  lista.appendChild(nuevaTarea)
  document.getElementById("tarea").value = ""
}

function eliminarTarea(elemento) {
  elemento.parentNode.remove()
}
