
//Funcion de Menu - Boton @ver menu oculta  o muestra
var menuBtn = $('.menu-icon');
var actmenu = $('.navigation ul');

menuBtn.click(function(){

  if(actmenu.hasClass ('show') ) {
    actmenu.removeClass('show');
  } else{
    actmenu.addClass('show');

  }


  });

// Funciones de contacto  
// N1 Enviar informacion a sitio

function enviar() { // Envia los datos de formulario a la direccion de correo * Incompleta
  alert('se ha enviado tu comentario, muchas gracias')
}



// Limpiar - limia el campo Target
var ultimo = null;
function marcar(elemento) {
  ultimo = elemento;
}


function limpiar() {
  if (ultimo != null) {
  	ultimo.value = "";
  }
}


