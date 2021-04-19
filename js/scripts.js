
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



// Limpiar - limia el campo Target en formulario
var ultimo = null;
function marcar(elemento) {
  ultimo = elemento;
}


function limpiar() {
  if (ultimo != null) {
  	ultimo.value = "";
  }
}


// Alerta personalizada 

// Funciones de contacto  
// N1 Enviar informacion a sitio
function enviar() { // alerta de formulario emitido
  alert('se ha enviado tu comentario, muchas gracias')
  }
    


  




