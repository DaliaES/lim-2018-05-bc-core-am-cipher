//function btnCifrar(){
    let btnCifrar = ()=>{
    document.getElementById("cipmsg").value = document.getElementById("plainmsg").value;
  }
  btnCipher.addEventListener("click",btnCifrar);
  //function btnDescifrar(){
    //let; btnDescifrar =()=>{
   // document.getElementById("plainmsg").value = document.getElementById("cipmsg").value;
  //}
  //btnDeCipher.addEventListener("click",btntext)
    let btndeCifrar = ()=>{
    document.getElementById("plainmsg").value = document.getElementById("cipmsg").value;
  }
  btnDeCipher.addEventListener("click",btndeCifrar);
  let btnborrar =()=>{
  //document.getElementById("cipmsg").value;
  //}
  //reset.addEventListener("click",btnborrar)