function enviarReservaWhatsApp() {
  const cantidadPersonas = document.getElementById("cantidad_personas");
  const cantidad = Number(cantidadPersonas.value);

  if (!cantidadPersonas.value || cantidad < 1 || cantidad > 100) {
    alert("Ingresá una cantidad de personas válida.");
    cantidadPersonas.focus();
    return;
  }

  const telefono = "5493517325619";
  const diaSeleccionado = document.querySelector(
    'input[name="dia_form"]:checked',
  );

  if (!diaSeleccionado) {
    alert("Seleccioná el día de la reserva.");
    return;
  }

  const dia = diaSeleccionado.value;

  const nombre = document.getElementById("nombre_form").value.trim();

 const mensaje = `¡Hola!  Quisiera hacer una reserva

 Nombre: ${nombre}
 Personas: ${cantidad}
 Día: ${dia}

¿Me confirman la disponibilidad? ¡Muchas gracias!`;

  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
}
