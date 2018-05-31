//fncion para cifrar el mensaje
   
let encode = (offset,string)=>{
  let msgcipher = "";
  let number = parseInt(offset);
  for ( let i=0;i<string.length;i++){
    let asci = string.charCodeAt(i);
    if (65 <= asci && asci <=  90){
     let ecuaCif = ((asci - 65 + number)%26 + 65);
    }
      else  if (97 <= asci && asci <=  122){
     ecuaCif = (asci - 97 + number)%26 + 97;
     }
        else {
       ecuaCif = asci;  
     }
       msgcipher += String.fromCharCode(ecuaCif);
  }
    return msgcipher;
 }
//funcion para descifrar
 let decode = (offset,string) => {
  let msgdescipher = "";
  let number = parseInt(offset);
  let i= 0;
  for (let i=0;i<string.length;i++){
    let asci = string.charCodeAt(i);
    if (65 <= asci && asci <=  90){
     let ecuaDesCif = (asci - 65 - number)%26 + 65; 
     msgdescipher += String.fromCharCode(ecuaDesCif);
     } 
     else  if (97 <= asci && asci <=  122){
     ecuaDesCif = ((asci - 97 - number)%26 + 97);
     }
     else  {
     ecuaDesCif = asci;   
     }
     msgdescipher += String.fromCharCode(ecuaDesCif);
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
    
