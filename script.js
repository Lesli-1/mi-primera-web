const subtitulo = document.getElementById("subtitulo")

subtitulo.addEventListener("click", function() {
  if (subtitulo.textContent === "Estudiante de desarrollo web") {
    subtitulo.textContent = "¡Me hiciste clic!"
  } else {
    subtitulo.textContent = "Estudiante de desarrollo web"
  }
})

const campoNombre = document.getElementById("campo-nombre")
const botonSaludar = document.getElementById("boton-saludar")
const mensajeSaludo = document.getElementById("mensaje-saludo")

botonSaludar.addEventListener("click", function() {
  const nombre = campoNombre.value
  if (nombre === "") {
    mensajeSaludo.textContent = "¡Por favor escribe tu nombre!"
  } else {
  mensajeSaludo.textContent = "¡Hola, " + nombre + "!"
}
})

const seccionSobreMi = document.querySelector("section")

seccionSobreMi.addEventListener("click", function() {
  seccionSobreMi.classList.toggle("resaltado")
})
