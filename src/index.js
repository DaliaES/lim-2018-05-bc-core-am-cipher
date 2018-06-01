//fncion para cifrar el mensaje
let  encuentraAscii = (num) =>{
  let encuentra = false;
  for (let i = 97; i <= 122; i++) {
      if (num == i) {
          encuentra = true;
      }
  }
  for (let i = 65; i <= 90; i++) {
      if (num == i) {
          encuentra = true;
      }
  }
  return encuentra;
};
let nextAscii = (value, numero) =>{
  let next = value + numero;
   for (let i = 97; i <= 122; i++) {
      if (i == value && next > 122) {
          next = 96 + (next - 122);
      }
  }
  for (let i = 65; i <= 90; i++) {
      if (i == value && next > 90) {
          next = 64 + (next - 90);
      }
  }
  return String.fromCharCode(next);
};
let backAscii = (value, numero) => {
  let back = value - numero;
  ;
  for (let i = 97; i <= 122; i++) {
      if (i == value && back < 97) {
          back = 123 - (97 - back);
      }
  }
  for (let i = 65; i <= 90; i++) {
      if (i == value && back < 65) {
          back = 91 - (65 - back);
      }
  }
  return String.fromCharCode(back);
};
let encode = (offset,string)=>{
  let msgcipher = "";
  let number = parseInt(offset);
  for ( let i=0;i<string.length;i++){
    if (encuentraAscii(string.charCodeAt(i))) {
        msgcipher += nextAscii(string.charCodeAt(i), number);
      }  else {
        msgcipher += String.fromCharCode(string.charCodeAt(i) + number);
      }
    }
  return msgcipher;
  }
//funcion para descifrar
 let decode = (offset,string) => {
  let msgdescipher = "";
  let number = parseInt(offset);
  for (let i=0;i<string.length;i++){
    if (encuentraAscii(string.charCodeAt(i))) {
      msgdescipher += backAscii(string.charCodeAt(i), number);
  }
  else {
      msgdescipher += String.fromCharCode(string.charCodeAt(i) - number);
  }
}
return msgdescipher;
}
  //interaccion con el DOM
 //definir var offset y string
 const claveDespl = document.getElementById("key");
 const msgAcifrar = document.getElementById("plainmsg");
 const msgAdescif = document.getElementById("cipmsg");
 //definir variables para el boton
 const botonCifrar = document.getElementById("btnCipher");
 const botonDescif = document.getElementById("btnDeCipher");
 
  let btnCifrar = ()=>{
     msgAdescif.innerHTML = encode(claveDespl.value,msgAcifrar.value);
   }
   botonCifrar.addEventListener("click",btnCifrar);
 
  let btndeCifrar = ()=>{
     msgAcifrar.innerHTML = decode(claveDespl.value,msgAdescif.value);
   }
   botonDescif.addEventListener("click",btndeCifrar);
   //let btnborrar =()=>{
   //document.getElementById("cipmsg").value;
   //}
   //reset.addEventListener("click",btnborrar)
    
