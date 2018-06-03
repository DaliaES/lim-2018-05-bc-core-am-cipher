 //interaccion con el DOM
 //definir var offset y string
 const claveDespl = document.getElementById("key");
 const msgAcifrar = document.getElementById("plainmsg");
 const msgAdescif = document.getElementById("cipmsg");
  //definir variables para el boton
 const botonCifrar = document.getElementById("btnCipher");
 const botonDescif = document.getElementById("btnDeCipher");
 const botonBorrar = document.getElementById("reset")
 
 let btnCifrar = () => {
   msgAdescif.value = cipher.encode(claveDespl.value,msgAcifrar.value);
 }
 botonCifrar.addEventListener("click",btnCifrar);
  
 let btndeCifrar = () => {
   msgAcifrar.value = cipher.decode(claveDespl.value,msgAdescif.value);
 }
 botonDescif.addEventListener("click",btndeCifrar);
 
 let btnborrar = () => {
   msgAcifrar.value= "";
   msgAdescif.value = "";
   claveDespl.value = "";
 }
 botonBorrar.addEventListener("click",btnborrar)
     
 