// Galeria de fotos
$(document).ready(function () {

  $('.imggaleria').click(function(e) {
      var img = e.target.src;
      var caption = e.target.alt;
  
      // Obtenemos el texto personalizado del atributo data-caption
      var customText = $(e.target).data('caption');
  
      // Construye el contenido del contenedor con el texto personalizado
      var seleccionada = '<div id="contenedor"> <img src="' + img + '" alt="' + caption + '" id="principal"> <div id="caption">' + customText + '</div> <div id="botonsalida">X</div> </div>';
  
      // Verifica si ya existe un contenedor antes de agregar uno nuevo
      if ($('#contenedor').length === 0) {
          $('body').append(seleccionada);
  
          // Agrega el manejador de clic para el botón de salida dentro del contenedor
          $('#botonsalida').click(function() {
              $('#contenedor').remove();
          });
          
          // Agregamos un manejador de clic al contenedor para cerrarlo al hacer clic en cualquier parte de la imagen
          $('#contenedor').click(function() {
              $(this).remove();
          });
          
          // Evita que el clic en la imagen cierre el contenedor
          $('#principal').click(function(e) {
              e.stopPropagation();
          });
      }
  });
  });
  
// Validacion formulario - pagina de contacto
// Cuando el documento esté listo, ejecuta la función
$(document).ready(function () {
    
  // Selecciona el formulario con el id 'formulario' y aplica la validación
  $('#formulario').validate({
      
      // Reglas de validación para cada campo del formulario
      rules: {
          name: "required",  // El campo 'name' es obligatorio
          email: {
              required: true,  // El campo 'email' es obligatorio
              email: true      // Debe tener un formato de dirección de correo electrónico
          },
          password: {
              required: true,   // El campo 'password' es obligatorio
              minlength: 5      // Debe tener al menos 5 caracteres
          },
      },
      
      // Mensajes de error personalizados para cada regla de validación
      messages: {
          name: "Por favor, escriba su nombre",  // Mensaje para el campo 'name'
          email: {
              required: "Por favor, ingrese un correo electrónico",  // Mensaje para el campo 'email' si está vacío
              email: "Por favor, ingrese un correo electrónico válido",  // Mensaje para el campo 'email' si no es válido
          },
          password: {
              required: "Por favor, introduzca su contraseña",  // Mensaje para el campo 'password'
              minlength: jQuery.validator.format("La contraseña debe tener al menos {0} caracteres")  // Mensaje si la contraseña es demasiado corta
          },
      },
      
      // Clase para aplicar a los elementos con errores
      errorClass: "is-invalid",
      
      // Elemento que se creará y agregará a los elementos con errores
      errorElement: "div",
      
      // Función para resaltar los elementos con errores
      highlight: function (element, errorClass, validClass) {
          $(element).addClass("is-invalid").removeClass("is-valid");
      },
      
      // Función para quitar el resaltado cuando el error se corrige
      unhighlight: function (element, errorClass, validClass) {
          $(element).removeClass("is-invalid").addClass("is-valid");
      },
      
      // Función para colocar el mensaje de error en un contenedor específico
      errorPlacement: function (error, element) {
          // Mueve el mensaje de error al contenedor específico (el siguiente 'div' después del elemento)
          error.appendTo(element.next("div"));
      },
      
      // Función que se ejecuta cuando el formulario se envía con éxito
      submitHandler: function (form) {
          alert('Formulario enviado exitosamente!');  // Muestra una alerta
          form.reset();  // Limpia los campos del formulario
          form.submit();  // Envía el formulario
          window.location.reload(true);
      }
  });
});
              

function cambiarfondo() {
    var button = document.getElementById("toggleButton");
    var body = document.body;

    button.addEventListener("click", function () {
      //chequea si contiene la class black
      if (body.classList.contains("black")) {
        // si la contiene la remueve y cambia el color a azul
        body.classList.remove("black");
        body.style.backgroundColor = "#0d6efd";
        button.innerText = "Cambiar Fondo";
      } else {
        // si no la contiene remueve la clase del color primario y agrega la clase black y el cambio de color
        body.classList.remove("bg-primary");
        body.classList.add("black");
        body.style.backgroundColor = "black";
        button.innerText = "Resetear Fondo";
      }
    });
  }