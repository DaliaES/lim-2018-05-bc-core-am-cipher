function btnCifrar(){
    document.getElementById("cipmsg").value = document.getElementById("plainmsg").value;
  }
  btnCipher.addEventListener("click",btnCifrar)
  function btnDescifrar(){
    document.getElementById("plainmsg").value = document.getElementById("cipmsg").value;
  }
  btnDeCipher.addEventListener("click",btnDescifrar)
  