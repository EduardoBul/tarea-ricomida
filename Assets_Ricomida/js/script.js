//* Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//*

  // Mostrar alerta al hacer clic en el botón "Enviar por correo"
  $('#enviarCorreo').on('click', function() {
    alert('El correo fue enviado correctamente...');
  });

  // Cambiar el color del texto de los títulos "INGREDIENTES" y "PREPARACIÓN" al hacer doble clic
  $('h2, h3').on('dblclick', function() {
    if ($(this).text() === 'INGREDIENTES' || $(this).text() === 'PREPARACIÓN') {
      $(this).css('color', 'red');
    }
  });

  // Alternar la visibilidad del contenido en las tarjetas "card" de la sección de Recetas Relacionadas
  $('.card-title').on('click', function() {
    $(this).siblings('.card-content').toggle();
  });

