$(document).ready( function() {  
   const url= window.location.search;
   console.log(url);

   const url2 = new URLSearchParams(url);
   url2.get("Nombre")
   url2.get("Apellido")
   url2.get("Telefono")
   url2.get("Correo")

});

//function validaForm(){
    // Campos de texto
  //  if($("#nombre").val() == ""){
    //    alert("El campo Nombre no puede estar vacío.");
      //  $("#nombre").focus();       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
       // return false;
   // }
   // if($("#apellidos").val() == ""){
   //     alert("El campo Apellidos no puede estar vacío.");
    //    $("#apellidos").focus();
     //   return false;
   // }
    //if($("#telefono").val() == ""){
     ///   alert("El campo teléfono no puede estar vacío.");
       // $("#direccion").focus();
       // return false;
   // }

    // Checkbox
   // if($("#correo").val() == ""){
    //    alert("El campo correo no puede estar vacío.");
     //   $("#direccion").focus();
     //   return false;
    //}

   // return true; // Si todo está correcto
//}